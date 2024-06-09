import { HttpClient, HttpParams } from '@angular/common/http'
import { Injectable, inject, signal } from '@angular/core'
import { environment } from '../../../environments/environment.development'
import { map, shareReplay } from 'rxjs'
import { PlaylistItem, PlaylistItemResponse } from '../types/dance-video.type'

@Injectable({
  providedIn: 'root',
})
export class UrbankizVideoService {
  private http = inject(HttpClient)

  private baseUrl = 'https://youtube.googleapis.com/youtube/v3'
  private playlistItemsUri = '/playlistItems'
  private baseParam = new HttpParams().set('part', 'snippet').set('playlistId', 'PLFIFv2lqJqFtgLh4G-ap5v06N0V5tzgi5').set('key', environment.ytApiKey)

  public urbankizVideoSig = signal<PlaylistItem[]>([])

  constructor() { }

  public fetchUrbankizVideos() {
    return this.http
      .get<PlaylistItemResponse>(this.baseUrl + this.playlistItemsUri, { params: this.baseParam })
      .pipe(
        map((res: PlaylistItemResponse) => this.urbankizVideoSig.set(res.items)),
        shareReplay(1),
      )
      .subscribe()
  }
}

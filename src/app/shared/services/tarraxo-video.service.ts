import { HttpClient, HttpParams } from '@angular/common/http'
import { Injectable, inject, signal } from '@angular/core'
import { PlaylistItem, PlaylistItemResponse } from '../types/dance-video.type'
import { map, shareReplay } from 'rxjs'
import { environment } from '../../../environments/environment.development'

@Injectable({
  providedIn: 'root',
})
export class TarraxoVideoService {
  private http = inject(HttpClient)

  private baseUrl = 'https://youtube.googleapis.com/youtube/v3'
  private playlistItemsUri = '/playlistItems'
  private baseParam = new HttpParams().set('part', 'snippet').set('playlistId', 'PLFIFv2lqJqFt-5lKID-AaHyE1Dyr3IfUA').set('key', environment.ytApiKey)

  public tarraxoVideoSig = signal<PlaylistItem[]>([])

  constructor() {}

  public fetchTarraxoVideos() {
    return this.http
      .get<PlaylistItemResponse>(this.baseUrl + this.playlistItemsUri, { params: this.baseParam })
      .pipe(
        map((res: PlaylistItemResponse) => this.tarraxoVideoSig.set(res.items)),
        shareReplay(1),
      )
      .subscribe()
  }
}

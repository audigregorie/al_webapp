import { HttpClient, HttpParams } from '@angular/common/http'
import { Injectable, inject, signal } from '@angular/core'
import { PlaylistItem, PlaylistItemResponse } from '../types/dance-video.type'
import { map, shareReplay } from 'rxjs'
import { environment } from '../../../environments/environment.development'

@Injectable({
  providedIn: 'root',
})
export class KizMusicService {
  private http = inject(HttpClient)

  private baseUrl = 'https://youtube.googleapis.com/youtube/v3'
  private playlistItemsUri = '/playlistItems'
  private baseParam = new HttpParams().set('part', 'snippet').set('playlistId', 'PLFIFv2lqJqFue2hTmZ4dZJ8cKw-87C-f-').set('key', environment.ytApiKey)

  public kizMusicSig = signal<PlaylistItem[]>([])

  constructor() { }

  public fetchKizMusic() {
    return this.http
      .get<PlaylistItemResponse>(this.baseUrl + this.playlistItemsUri, { params: this.baseParam })
      .pipe(
        map((res: PlaylistItemResponse) => this.kizMusicSig.set(res.items)),
        shareReplay(1),
      )
      .subscribe()
  }
}

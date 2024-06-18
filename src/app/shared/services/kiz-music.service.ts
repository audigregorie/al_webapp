import { HttpClient, HttpParams } from '@angular/common/http'
import { Injectable, inject, signal } from '@angular/core'
import { PlaylistItem, PlaylistItemResponse } from '../types/dance-video.type'
import { map, tap } from 'rxjs'
import { environment } from '../../../environments/environment.development'
import { toSignal } from '@angular/core/rxjs-interop'

@Injectable({
  providedIn: 'root',
})
export class KizMusicService {
  private http = inject(HttpClient)

  private baseUrl = 'https://youtube.googleapis.com/youtube/v3'
  private playlistItemsUri = '/playlistItems'
  private baseParam = new HttpParams().set('part', 'snippet').set('playlistId', 'PLFIFv2lqJqFue2hTmZ4dZJ8cKw-87C-f-').set('key', environment.ytApiKey).set('maxResults', '50')

  #kizMusicVideos = signal<PlaylistItem[]>([])
  readonly kizMusicVideos = this.#kizMusicVideos

  constructor() {}

  // Get kiz music videos.
  public getKizMusicVideos = toSignal(
    this.http.get<PlaylistItemResponse>(this.baseUrl + this.playlistItemsUri, { params: this.baseParam }).pipe(
      map((res: PlaylistItemResponse) => res.items),
      tap((items: PlaylistItem[]) => this.#kizMusicVideos.set(items)),
    ),
  )
}

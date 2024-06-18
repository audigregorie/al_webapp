import { HttpClient, HttpParams } from '@angular/common/http'
import { Injectable, inject, signal } from '@angular/core'
import { PlaylistItem, PlaylistItemResponse } from '../types/dance-video.type'
import { map, tap } from 'rxjs'
import { environment } from '../../../environments/environment.development'
import { toSignal } from '@angular/core/rxjs-interop'

@Injectable({
  providedIn: 'root',
})
export class TarraxoVideoService {
  private http = inject(HttpClient)

  private baseUrl = 'https://youtube.googleapis.com/youtube/v3'
  private playlistItemsUri = '/playlistItems'
  private baseParam = new HttpParams().set('part', 'snippet').set('playlistId', 'PLFIFv2lqJqFt-5lKID-AaHyE1Dyr3IfUA').set('key', environment.ytApiKey).set('Permissions-Policy', 'ch-ua-form-factor')

  #tarraxoVideos = signal<PlaylistItem[]>([])
  readonly tarraxoVideos = this.#tarraxoVideos

  constructor() {}

  // Get Tarraxo videos.
  public getTarraxoVideos = toSignal(
    this.http.get<PlaylistItemResponse>(this.baseUrl + this.playlistItemsUri, { params: this.baseParam }).pipe(
      map((res: PlaylistItemResponse) => res.items),
      tap((items: PlaylistItem[]) => this.#tarraxoVideos.set(items)),
    ),
  )
}

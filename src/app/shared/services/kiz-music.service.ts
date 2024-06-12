import { HttpClient, HttpParams } from '@angular/common/http'
import { Injectable, inject } from '@angular/core'
import { PlaylistItem, PlaylistItemResponse } from '../types/dance-video.type'
import { Observable, Subject, map, shareReplay, takeUntil } from 'rxjs'
import { environment } from '../../../environments/environment.development'

@Injectable({
  providedIn: 'root',
})
export class KizMusicService {
  private http = inject(HttpClient)

  private baseUrl = 'https://youtube.googleapis.com/youtube/v3'
  private playlistItemsUri = '/playlistItems'
  private baseParam = new HttpParams().set('part', 'snippet').set('playlistId', 'PLFIFv2lqJqFue2hTmZ4dZJ8cKw-87C-f-').set('key', environment.ytApiKey)

  private destroy$ = new Subject<void>()

  constructor() { }

  // Ensure the subscription is destroyed.
  ngOnDestroy(): void {
    this.destroy$.complete()
  }

  // Get kiz music videos.
  public fetchKizMusic(): Observable<PlaylistItem[]> {
    return this.http.get<PlaylistItemResponse>(this.baseUrl + this.playlistItemsUri, { params: this.baseParam }).pipe(
      map((res: PlaylistItemResponse) => res.items),
      shareReplay(1),
      takeUntil(this.destroy$),
    )
  }
}

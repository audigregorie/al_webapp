import { HttpClient, HttpParams } from '@angular/common/http'
import { Injectable, inject } from '@angular/core'
import { environment } from '../../../environments/environment.development'
import { Observable, Subject, map, shareReplay, takeUntil } from 'rxjs'
import { PlaylistItem, PlaylistItemResponse } from '../types/dance-video.type'

@Injectable({
  providedIn: 'root',
})
export class UrbankizVideoService {
  private http = inject(HttpClient)

  private baseUrl = 'https://youtube.googleapis.com/youtube/v3'
  private playlistItemsUri = '/playlistItems'
  private baseParam = new HttpParams().set('part', 'snippet').set('playlistId', 'PLFIFv2lqJqFtgLh4G-ap5v06N0V5tzgi5').set('key', environment.ytApiKey)

  private destroy$ = new Subject<void>()

  constructor() { }

  // Ensure the subscription is destroyed.
  ngOnDestroy(): void {
    this.destroy$.complete()
  }

  // Get urbankiz videos.
  // FIX: Observable type
  public fetchUrbankizVideos(): Observable<PlaylistItem[]> {
    return this.http.get<PlaylistItemResponse>(this.baseUrl + this.playlistItemsUri, { params: this.baseParam }).pipe(
      map((res: PlaylistItemResponse) => res.items),
      shareReplay(1),
      takeUntil(this.destroy$),
    )
  }
}

import { HttpClient, HttpParams } from '@angular/common/http'
import { Injectable, inject, signal } from '@angular/core'
import { environment } from '../../../environments/environment.development'
import { BehaviorSubject, Observable, map, tap } from 'rxjs'
import { PlaylistItem, PlaylistItemResponse } from '../types/dance-video.type'
import { toSignal } from '@angular/core/rxjs-interop'
// import { takeUntilDestroyed } from '@angular/core/rxjs-interop'

@Injectable({
  providedIn: 'root',
})
export class UrbankizVideoService {
  private http = inject(HttpClient)

  private baseUrl = 'https://youtube.googleapis.com/youtube/v3'
  private playlistItemsUri = '/playlistItems'
  private baseParam = new HttpParams()
    .set('part', 'snippet')
    .set('playlistId', 'PLFIFv2lqJqFtgLh4G-ap5v06N0V5tzgi5')
    .set('key', environment.ytApiKey)
    .set('maxResults', '50')
    .set('Permissions-Policy', 'ch-ua-form-factor')

  #urbankizVideos = signal<PlaylistItem[]>([])
  readonly urbankizVideos = this.#urbankizVideos

  constructor() {}

  // Get urbankiz videos.
  public getUrbankizVideos = toSignal(
    this.http.get<PlaylistItemResponse>(this.baseUrl + this.playlistItemsUri, { params: this.baseParam }).pipe(
      map((res: PlaylistItemResponse) => res.items),
      tap((items: PlaylistItem[]) => this.#urbankizVideos.set(items)),
    ),
  )

  //     private http = inject(HttpClient)

  //   private baseUrl = 'https://youtube.googleapis.com/youtube/v3'
  //   private playlistItemsUri = '/playlistItems'
  //   private baseParam = new HttpParams()
  //     .set('part', 'snippet')
  //     .set('playlistId', 'PLFIFv2lqJqFtgLh4G-ap5v06N0V5tzgi5')
  //     .set('key', environment.ytApiKey)
  //     .set('maxResults', '50')
  //     .set('Permissions-Policy', 'ch-ua-form-factor')

  //   // private urbankizVideos$ = new BehaviorSubject<PlaylistItem[]>([])
  //   private urbankizVideosSub = new BehaviorSubject<PlaylistItem[]>([])
  //   public urbankizVideos$ = this.urbankizVideosSub.asObservable()

  //   constructor() {}

  //   // Get urbankiz videos.
  //   public getUrbankizVideos(): Observable<PlaylistItem[]> {
  //     return this.http.get<PlaylistItemResponse>(this.baseUrl + this.playlistItemsUri, { params: this.baseParam }).pipe(
  //       map((res: PlaylistItemResponse) => res.items),
  //       tap((items: PlaylistItem[]) => this.urbankizVideosSub.next(items)),
  //       takeUntilDestroyed(),
  //     )
  //   }
}

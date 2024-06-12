import { CommonModule } from '@angular/common'
import { Component, OnInit, inject } from '@angular/core'
import { UrbankizVideoService } from '../../../shared/services/urbankiz-video.service'
import { TarraxoVideoService } from '../../../shared/services/tarraxo-video.service'
import { PlaylistItem } from '../../../shared/types/dance-video.type'
import { VideoItemComponent } from '../../../shared/components/video-item/video-item.component'
import { Observable, combineLatest, map } from 'rxjs'

@Component({
  selector: 'app-dance-video-list',
  standalone: true,
  imports: [CommonModule, VideoItemComponent],
  templateUrl: './dance-video-list.component.html',
  styleUrl: './dance-video-list.component.scss',
})
export class DanceVideoListComponent implements OnInit {
  private urbankizService = inject(UrbankizVideoService)
  private tarraxoService = inject(TarraxoVideoService)

  public combinedDanceVideos$!: Observable<PlaylistItem[]>

  ngOnInit(): void {
    this.combineUrbankizAndTarraxoVideos()
  }

  // Combine urbankiz and tarraxo videos.
  public combineUrbankizAndTarraxoVideos(): void {
    this.combinedDanceVideos$ = combineLatest([this.urbankizService.fetchUrbankizVideos(), this.tarraxoService.fetchTarraxoVideos()]).pipe(
      map(([urbankizVideos, tarraxoVideos]) => [...urbankizVideos, ...tarraxoVideos]),
    )
  }
}

import { CommonModule } from '@angular/common'
import { Component, OnInit, computed, inject, signal } from '@angular/core'
import { UrbankizVideoService } from '../../../shared/services/urbankiz-video.service'
import { TarraxoVideoService } from '../../../shared/services/tarraxo-video.service'
import { VideoItemComponent } from '../../../shared/components/video-item/video-item.component'
import { PlaylistItem } from '../../../shared/types/dance-video.type'

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

  public shownVideos = signal<PlaylistItem[]>([])
  public allVideos = computed(() => this.urbankizService.urbankizVideos().concat(this.tarraxoService.tarraxoVideos()))

  ngOnInit(): void {
    this.showAllVideos()
  }

  public showAllVideos(): void {
    this.shownVideos.set(this.allVideos())
  }

  public showUrbankizVideos(): void {
    this.shownVideos.set(this.urbankizService.urbankizVideos())
  }

  public showTarraxoVideos(): void {
    this.shownVideos.set(this.tarraxoService.tarraxoVideos())
  }
}

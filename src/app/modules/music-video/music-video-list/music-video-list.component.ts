import { Component, inject } from '@angular/core'
import { KizMusicService } from '../../../shared/services/kiz-music.service'
import { CommonModule } from '@angular/common'
import { VideoItemComponent } from '../../../shared/components/video-item/video-item.component'

@Component({
  selector: 'app-music-video-list',
  standalone: true,
  imports: [CommonModule, VideoItemComponent],
  templateUrl: './music-video-list.component.html',
  styleUrl: './music-video-list.component.scss',
})
export class MusicVideoListComponent {
  private kizMusicService = inject(KizMusicService)

  public kizMusicVideos = this.kizMusicService.kizMusicVideos
}

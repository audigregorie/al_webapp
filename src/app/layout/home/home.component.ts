import { Component, inject } from '@angular/core'
import { HeaderComponent } from '../header/header.component'
import { UrbankizVideoService } from '../../shared/services/urbankiz-video.service'
import { CommonModule } from '@angular/common'
import { videoEmbedBaseUrl } from '../../shared/constants/video-embed'
import { VideoEmbedComponent } from '../../shared/components/video-embed/video-embed.component'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, CommonModule, VideoEmbedComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  private urbankizService = inject(UrbankizVideoService)

  public videos = this.urbankizService.videoSig
  public videoEmbedBaseUrl = videoEmbedBaseUrl

  constructor() {
    this.urbankizService.fetchUrbankizVideos()
  }
}

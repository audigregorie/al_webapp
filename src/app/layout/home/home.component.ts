import { Component, inject } from '@angular/core'
import { HeaderComponent } from '../header/header.component'
import { UrbankizVideoService } from '../../shared/services/urbankiz-video.service'
import { CommonModule } from '@angular/common'
import { videoEmbedBaseUrl } from '../../shared/constants/video-embed'
import { VideoEmbedComponent } from '../../shared/components/video-embed/video-embed.component'
import { TarraxoVideoService } from '../../shared/services/tarraxo-video.service'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, CommonModule, VideoEmbedComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  private urbankizService = inject(UrbankizVideoService)
  private tarraxoService = inject(TarraxoVideoService)

  public urbankizVideos = this.urbankizService.urbankizVideoSig
  public tarraxoVideos = this.tarraxoService.tarraxoVideoSig
  public videoEmbedBaseUrl = videoEmbedBaseUrl

  constructor() {
    this.urbankizService.fetchUrbankizVideos()
    this.tarraxoService.fetchTarraxoVideos()
  }
}

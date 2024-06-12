import { Component, OnInit, inject } from '@angular/core'
import { HeaderComponent } from '../header/header.component'
import { UrbankizVideoService } from '../../shared/services/urbankiz-video.service'
import { CommonModule } from '@angular/common'
import { videoEmbedBaseUrl } from '../../shared/constants/video-embed'
import { VideoEmbedComponent } from '../../shared/components/video-embed/video-embed.component'
import { TarraxoVideoService } from '../../shared/services/tarraxo-video.service'
import { KizMusicService } from '../../shared/services/kiz-music.service'
import { OurImpactItemComponent } from '../../modules/our-impact-item/our-impact-item.component'
import { VideoItemComponent } from '../../shared/components/video-item/video-item.component'
import { FooterComponent } from '../footer/footer.component'
import { PlaylistItem } from '../../shared/types/dance-video.type'
import { Observable } from 'rxjs'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, CommonModule, VideoEmbedComponent, OurImpactItemComponent, VideoItemComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  private urbankizService = inject(UrbankizVideoService)
  private tarraxoService = inject(TarraxoVideoService)
  private kizMusicService = inject(KizMusicService)

  public urbankizVideos$!: Observable<PlaylistItem[]>
  public tarraxoVideos$!: Observable<PlaylistItem[]>
  public kizMusicVideos$!: Observable<PlaylistItem[]>
  public videoEmbedBaseUrl = videoEmbedBaseUrl

  ngOnInit(): void {
    this.urbankizVideos$ = this.urbankizService.fetchUrbankizVideos()
    this.tarraxoVideos$ = this.tarraxoService.fetchTarraxoVideos()
    this.kizMusicVideos$ = this.kizMusicService.fetchKizMusic()
  }
}

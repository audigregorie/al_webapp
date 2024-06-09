import { Component, Input, OnInit, inject } from '@angular/core'
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser'
import { videoEmbedBaseUrl } from '../../constants/video-embed'

@Component({
  selector: 'app-video-embed',
  standalone: true,
  imports: [],
  templateUrl: './video-embed.component.html',
  styleUrl: './video-embed.component.scss',
})
export class VideoEmbedComponent implements OnInit {
  private sanitizer = inject(DomSanitizer)

  @Input() public videoId: string | null = null

  public videoEmbedUrl: SafeResourceUrl = ''
  public videoEmbedBaseUrl: string = videoEmbedBaseUrl

  ngOnInit() {
    const url = `${this.videoEmbedBaseUrl}${this.videoId}`
    this.videoEmbedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url)
  }
}

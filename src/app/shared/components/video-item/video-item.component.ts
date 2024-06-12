import { Component, Input } from '@angular/core'
import { VideoEmbedComponent } from '../video-embed/video-embed.component'
import { PlaylistItem } from '../../types/dance-video.type'

@Component({
  selector: 'app-video-item',
  standalone: true,
  imports: [VideoEmbedComponent],
  templateUrl: './video-item.component.html',
  styleUrl: './video-item.component.scss',
})
export class VideoItemComponent {
  @Input() video!: PlaylistItem
  @Input() videoTag: string = ''
}

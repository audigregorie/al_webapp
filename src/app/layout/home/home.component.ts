import { Component, inject } from '@angular/core'
import { HeaderComponent } from '../header/header.component'
import { UrbankizVideoService } from '../../shared/services/urbankiz-video.service'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  private urbankizService = inject(UrbankizVideoService)

  public videos = this.urbankizService.videoSig

  constructor() {
    this.urbankizService.fetchUrbankizVideos()
  }
}

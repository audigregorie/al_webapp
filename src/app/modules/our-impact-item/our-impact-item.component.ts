import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-our-impact-item',
  standalone: true,
  imports: [],
  templateUrl: './our-impact-item.component.html',
  styleUrl: './our-impact-item.component.scss',
})
export class OurImpactItemComponent {
  @Input() public stats: string = ''
  @Input() public text: string = ''
}

import { Routes } from '@angular/router'
import { HomeComponent } from './layout/home/home.component'
import { DanceVideoListComponent } from './modules/dance-videos/dance-video-list/dance-video-list.component'
import { MusicVideoListComponent } from './modules/music-video/music-video-list/music-video-list.component'

export const routes: Routes = [
  { path: 'music', component: MusicVideoListComponent },
  { path: 'dance-videos', component: DanceVideoListComponent },
  { path: '', component: HomeComponent, pathMatch: 'full' },
]

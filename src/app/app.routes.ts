import { Routes } from '@angular/router'

export const routes: Routes = [
  { path: 'home', loadComponent: () => import('./layout/home/home.component').then((m) => m.HomeComponent) },
  { path: 'music-videos', loadComponent: () => import('./modules/music-video/music-video-list/music-video-list.component').then((m) => m.MusicVideoListComponent) },
  { path: 'dance-videos', loadComponent: () => import('./modules/dance-videos/dance-video-list/dance-video-list.component').then((m) => m.DanceVideoListComponent) },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
]

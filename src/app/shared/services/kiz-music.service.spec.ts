import { TestBed } from '@angular/core/testing';

import { KizMusicService } from './kiz-music.service';

describe('KizMusicService', () => {
  let service: KizMusicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KizMusicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

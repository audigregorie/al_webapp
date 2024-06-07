import { TestBed } from '@angular/core/testing';

import { TarraxoVideoService } from './tarraxo-video.service';

describe('TarraxoVideoService', () => {
  let service: TarraxoVideoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TarraxoVideoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

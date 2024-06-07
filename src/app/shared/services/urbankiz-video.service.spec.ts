import { TestBed } from '@angular/core/testing';

import { UrbankizVideoService } from './urbankiz-video.service';

describe('UrbankizVideoService', () => {
  let service: UrbankizVideoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UrbankizVideoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

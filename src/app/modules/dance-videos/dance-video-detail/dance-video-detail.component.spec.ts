import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DanceVideoDetailComponent } from './dance-video-detail.component';

describe('DanceVideoDetailComponent', () => {
  let component: DanceVideoDetailComponent;
  let fixture: ComponentFixture<DanceVideoDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DanceVideoDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DanceVideoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

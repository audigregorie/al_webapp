import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicVideoListComponent } from './music-video-list.component';

describe('MusicVideoListComponent', () => {
  let component: MusicVideoListComponent;
  let fixture: ComponentFixture<MusicVideoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MusicVideoListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MusicVideoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

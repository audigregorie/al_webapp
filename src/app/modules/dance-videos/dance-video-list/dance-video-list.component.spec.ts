import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DanceVideoListComponent } from './dance-video-list.component';

describe('DanceVideoListComponent', () => {
  let component: DanceVideoListComponent;
  let fixture: ComponentFixture<DanceVideoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DanceVideoListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DanceVideoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

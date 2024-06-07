import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DanceVideoItemComponent } from './dance-video-item.component';

describe('DanceVideoItemComponent', () => {
  let component: DanceVideoItemComponent;
  let fixture: ComponentFixture<DanceVideoItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DanceVideoItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DanceVideoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

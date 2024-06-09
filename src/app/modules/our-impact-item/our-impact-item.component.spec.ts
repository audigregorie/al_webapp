import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurImpactItemComponent } from './our-impact-item.component';

describe('OurImpactItemComponent', () => {
  let component: OurImpactItemComponent;
  let fixture: ComponentFixture<OurImpactItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OurImpactItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OurImpactItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

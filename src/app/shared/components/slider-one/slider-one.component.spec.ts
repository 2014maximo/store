import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderOneComponent } from './slider-one.component';

describe('SliderOneComponent', () => {
  let component: SliderOneComponent;
  let fixture: ComponentFixture<SliderOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SliderOneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SliderOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

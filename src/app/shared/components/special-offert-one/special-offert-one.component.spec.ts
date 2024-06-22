import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialOffertOneComponent } from './special-offert-one.component';

describe('SpecialOffertOneComponent', () => {
  let component: SpecialOffertOneComponent;
  let fixture: ComponentFixture<SpecialOffertOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpecialOffertOneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpecialOffertOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

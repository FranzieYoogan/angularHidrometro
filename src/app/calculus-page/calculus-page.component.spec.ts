import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculusPageComponent } from './calculus-page.component';

describe('CalculusPageComponent', () => {
  let component: CalculusPageComponent;
  let fixture: ComponentFixture<CalculusPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalculusPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CalculusPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

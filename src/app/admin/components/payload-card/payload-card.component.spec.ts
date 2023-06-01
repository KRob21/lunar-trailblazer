import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayloadCardComponent } from './payload-card.component';

describe('PayloadCardComponent', () => {
  let component: PayloadCardComponent;
  let fixture: ComponentFixture<PayloadCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayloadCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PayloadCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

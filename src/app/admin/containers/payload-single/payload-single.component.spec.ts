import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayloadSingleComponent } from './payload-single.component';

describe('PayloadSingleComponent', () => {
  let component: PayloadSingleComponent;
  let fixture: ComponentFixture<PayloadSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayloadSingleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PayloadSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

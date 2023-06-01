import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayloadListComponent } from './payload-list.component';

describe('PayloadListComponent', () => {
  let component: PayloadListComponent;
  let fixture: ComponentFixture<PayloadListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayloadListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PayloadListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoAdvertiseComponent } from './two-advertise.component';

describe('TwoAdvertiseComponent', () => {
  let component: TwoAdvertiseComponent;
  let fixture: ComponentFixture<TwoAdvertiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwoAdvertiseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoAdvertiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

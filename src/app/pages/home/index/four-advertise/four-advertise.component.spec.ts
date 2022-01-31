import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FourAdvertiseComponent } from './four-advertise.component';

describe('FourAdvertiseComponent', () => {
  let component: FourAdvertiseComponent;
  let fixture: ComponentFixture<FourAdvertiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FourAdvertiseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FourAdvertiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

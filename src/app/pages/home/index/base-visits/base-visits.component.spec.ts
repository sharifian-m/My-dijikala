import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseVisitsComponent } from './base-visits.component';

describe('BaseVisitsComponent', () => {
  let component: BaseVisitsComponent;
  let fixture: ComponentFixture<BaseVisitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseVisitsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseVisitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmazingOfferComponent } from './amazing-offer.component';

describe('AmazingOfferComponent', () => {
  let component: AmazingOfferComponent;
  let fixture: ComponentFixture<AmazingOfferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmazingOfferComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmazingOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

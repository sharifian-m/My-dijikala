import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GifBannerComponent } from './gif-banner.component';

describe('GifBannerComponent', () => {
  let component: GifBannerComponent;
  let fixture: ComponentFixture<GifBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GifBannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GifBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

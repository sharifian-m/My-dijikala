import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreCategotyComponent } from './more-categoty.component';

describe('MoreCategotyComponent', () => {
  let component: MoreCategotyComponent;
  let fixture: ComponentFixture<MoreCategotyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoreCategotyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreCategotyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

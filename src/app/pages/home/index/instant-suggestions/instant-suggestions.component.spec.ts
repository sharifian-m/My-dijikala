import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstantSuggestionsComponent } from './instant-suggestions.component';

describe('InstantSuggestionsComponent', () => {
  let component: InstantSuggestionsComponent;
  let fixture: ComponentFixture<InstantSuggestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstantSuggestionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstantSuggestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

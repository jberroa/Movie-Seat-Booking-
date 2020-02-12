import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviePriceDisplayComponent } from './movie-price-display.component';

describe('MoviePriceDisplayComponent', () => {
  let component: MoviePriceDisplayComponent;
  let fixture: ComponentFixture<MoviePriceDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviePriceDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviePriceDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

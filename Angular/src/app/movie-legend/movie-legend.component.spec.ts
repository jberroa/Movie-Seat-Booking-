import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieLegendComponent } from './movie-legend.component';

describe('MovieLegendComponent', () => {
  let component: MovieLegendComponent;
  let fixture: ComponentFixture<MovieLegendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieLegendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieLegendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

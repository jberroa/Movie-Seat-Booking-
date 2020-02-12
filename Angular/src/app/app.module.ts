import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MovieSelectorComponent } from './movie-selector/movie-selector.component';
import { MovieLegendComponent } from './movie-legend/movie-legend.component';
import { TheaterComponent } from './theater/theater.component';
import { MoviePriceDisplayComponent } from './movie-price-display/movie-price-display.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieSelectorComponent,
    MovieLegendComponent,
    TheaterComponent,
    MoviePriceDisplayComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

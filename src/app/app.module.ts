import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CitySearchComponent } from './city-search/city-search.component';
import { WeatherService } from '../services/weather.service';
import { WeatherResultComponent } from './weather-result/weather-result.component'

@NgModule({
  declarations: [
    AppComponent,
    CitySearchComponent,
    WeatherResultComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }

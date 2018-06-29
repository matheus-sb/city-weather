import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';

import { WeatherResult } from '../models/weather-result';
import { API_BASE_URL, API_KEY } from '../models/constants';

@Injectable()
export class WeatherService {

  constructor(private http: Http) { }

  getWeatherData(city: string): Observable<WeatherResult> {
    return this.http.get(`${API_BASE_URL}?q=${city}&APPID=${API_KEY}&units=metric`)
      .map(response => response.json())
      .catch(err => {
        console.log(err);
        return Observable.of(null);
      });
  }
}

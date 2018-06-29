import { Component, Input } from '@angular/core';
import { WeatherResult } from '../../models/weather-result';

@Component({
  selector: 'app-weather-result',
  templateUrl: './weather-result.component.html',
  styleUrls: ['./weather-result.component.css']
})
export class WeatherResultComponent {
  @Input() weatherResult: WeatherResult;

  constructor() { }
}

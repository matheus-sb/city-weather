import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WeatherService } from '../../services/weather.service';
import { WeatherResult } from '../../models/weather-result';

@Component({
  selector: 'app-city-search',
  templateUrl: './city-search.component.html',
  styleUrls: ['./city-search.component.css']
})
export class CitySearchComponent implements OnInit {
  public weatherResult: WeatherResult;
  public searchForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private weatherService: WeatherService) { }
  
  searchCity() {
    let city = this.searchForm.get('searchInput').value;
    this.weatherService.getWeatherData(city)
      .subscribe(
        response => {
          this.weatherResult = response;
        },
        error => console.log(error)
      )
  }

  createSearchForm() {
    this.searchForm = this.formBuilder.group({
      searchInput: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.createSearchForm();
  }

}

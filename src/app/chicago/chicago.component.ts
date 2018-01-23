import { Component, OnInit } from '@angular/core';
import { WeatherService } from './../weather.service';

@Component({
  selector: 'app-chicago',
  templateUrl: './chicago.component.html',
  styleUrls: ['./chicago.component.css']
})
export class ChicagoComponent implements OnInit {

  city = 'Chicago'
  weather;
  temp;
  maxTemp;
  minTemp;
  humidity;
  wind;
  clouds;

  constructor(private _weatherService: WeatherService) { }

  ngOnInit() {
    this.weather = this._weatherService.getWeather(this.city, (data) => {
      console.log(data)
      this.humidity = data.main.humidity;
      this.temp = data.main.temp;
      this.maxTemp = data.main.temp_max;
      this.minTemp = data.main.temp_min;
      this.clouds = data.weather[0].description;
    });
  }

}
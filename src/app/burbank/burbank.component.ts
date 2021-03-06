import { WeatherService } from './../weather.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-burbank',
  templateUrl: './burbank.component.html',
  styleUrls: ['./burbank.component.css']
})
export class BurbankComponent implements OnInit {

  city = 'Burbank'
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
      // this.temp = Math.floor(this.temp * (9 / 5) - 459.67);
      this.maxTemp = data.main.temp_max;
      // this.maxTemp = Math.floor(this.maxTemp * (9 / 5) - 459.67);
      this.minTemp = data.main.temp_min;
      // this.minTemp = Math.floor(this.minTemp * (9 / 5) - 459.67);
      this.clouds = data.weather[0].description;
    });
  }

}

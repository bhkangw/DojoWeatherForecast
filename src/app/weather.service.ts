import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
// import 'rxjs';

@Injectable()
export class WeatherService {

  constructor(private _http: Http) { }

  getWeather(city: string, cb) {
    this._http.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&APPID=eb8ceab7a53ef885d3d1661fc6bcee7e`)
      .subscribe((res) => {
        cb(res.json());
      }
    )
  }

}

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AppiWeatherService {

  API_KEY: string = "2560ea94493aab00b263f254d8c2803d";
  API_URL: string = "https://api.openweathermap.org/data/2.5/weather";

  constructor(private httpClient: HttpClient) {}

  getWeather(city: string): Observable<any> {
    const url = `${this.API_URL}?q=${city}&appid=${this.API_KEY}&units=metric`;
    return this.httpClient.get<any>(url);
  }
}

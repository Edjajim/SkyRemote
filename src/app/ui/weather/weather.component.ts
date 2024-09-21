import { Component, OnInit } from '@angular/core';
import { AppiWeatherService } from '../../core/appi-weather.service';
import { CommonModule } from '@angular/common';
import { AppiNewsService } from '../../core/appi-news.service';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './weather.component.html'
})
export class WeatherComponent implements OnInit {
  now: Date;
  weatherData: any;  
  constructor(private weatherService: AppiWeatherService, private newsService: AppiNewsService) { this.now = new Date();}

  ngOnInit(): void {
    this.newsService.formSubmit$.subscribe((data: any) => {
      this.getWeather(data)
    }); 
  }

  getWeather(city: string): void {
    this.weatherService.getWeather(city).subscribe(
      (data) => {
        this.weatherData = data;  
        console.log(this.weatherData);  
      },
      (error) => {
        console.error('Error fetching weather data', error);  
      }
    );
  }
}

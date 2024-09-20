import { Component, OnInit } from '@angular/core';
import { AppiWeatherService } from '../../core/appi-weather.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './weather.component.html'
})
export class WeatherComponent implements OnInit {

  weatherData: any;  
  constructor(private weatherService: AppiWeatherService) {}

  ngOnInit(): void {
    console.log('ngOnInit called'); 
    this.getWeather('Guadalajara');  
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

import { Component } from '@angular/core';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { WeatherComponent } from "../weather/weather.component";
import { NewsComponent } from "../news/news.component";

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [NavbarComponent, WeatherComponent, NewsComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

}

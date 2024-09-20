import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewsComponent } from '../../ui/news/news.component';
import { AppiNewsService } from '../../core/appi-news.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {
  public city = ""

  constructor(private api: AppiNewsService) {}

  setCity() {
    this.api.submitFormData(this.city)
  }
}

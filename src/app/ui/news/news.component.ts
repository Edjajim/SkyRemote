import { Component, OnInit } from '@angular/core';
import { AppiNewsService } from '../../core/appi-news.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './news.component.html'
})
export class NewsComponent implements OnInit{

  constructor(private appi: AppiNewsService) {}
  
  ngOnInit(): void {
    this.appi.formSubmit$.subscribe((data: any) => {
      this.updateNews(data)
    });
  }
  
  newsArticles: any[] = [];
  
  updateNews(city: string): void {
    this.appi.getNews(city).subscribe(
      (response) => {
        this.newsArticles = response.articles;
      },
      (error) => {
        console.error('Error fetching news:', error);
      }
    );
  }

}

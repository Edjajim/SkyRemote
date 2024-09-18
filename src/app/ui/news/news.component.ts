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
  
  newsArticles: any[] = [];
  
  ngOnInit(): void {
    this.appi.getNews("es").subscribe(
      (response) => {
        this.newsArticles = response.articles;
      },
      (error) => {
        console.error('Error fetching news:', error);
      }
    );
  }

}

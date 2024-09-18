import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppiNewsService {

  constructor(private httpClient: HttpClient) { }

  private API_KEY = "2251200a593f4c2ab54955cd59921abb"
  private API_URL = "https://newsapi.org/v2/everything"

  getNews(region: string): Observable<any> {
    const query = 'weather OR climate OR clima OR huracán OR tormenta';
    return this.httpClient.get<any>(`${this.API_URL}?q=${query}&language=${region}&apiKey=${this.API_KEY}`);
  }
}

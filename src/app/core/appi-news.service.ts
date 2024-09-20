import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppiNewsService {

  constructor(private httpClient: HttpClient) { }

  private API_KEY = "2251200a593f4c2ab54955cd59921abb"
  private API_URL = "https://newsapi.org/v2/everything"
  private formSubmitSource = new Subject<any>();
  formSubmit$ = this.formSubmitSource.asObservable();

  getNews(region: string): Observable<any> {
    const query = `${region} clima OR tormenta OR ciclón OR meteorológico NOT fútbol NOT deportes NOT películas NOT entretenimiento`;
    return this.httpClient.get<any>(`${this.API_URL}?q=${query}&language=es&apiKey=${this.API_KEY}`);
  }

  submitFormData(formData: string) {
    this.formSubmitSource.next(formData);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
 })

 export class AppiNewsService {

    API_KEY: string = "2560ea94493aab00b263f254d8c2803d"
    API_URL: string = ""

    constructor(private httpClient: HttpClient) { }
  
    getWeather(city: string){
        this.API_URL = ""
    }
  }
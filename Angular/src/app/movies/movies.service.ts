import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http:HttpClient) {
    this.moviesData = this.http.get("https://jsonplaceholder.typicode.com/photos")
  }
  moviesData:any = [];
}

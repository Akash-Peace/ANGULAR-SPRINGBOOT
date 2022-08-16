import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { MoviesService } from '../movies/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private isAuthenticated: AuthService, private router: Router, private moviesService: MoviesService) {}

  ngOnInit(): void {
    if(!this.isAuthenticated.authenticated){
      this.router.navigate(['login'])
    }
    this.moviesService.moviesData.subscribe((moviesData:any) => {for(let i=0; i<100; i++){this.movies.push(moviesData[i])}})
  }
  movies:any = []
}

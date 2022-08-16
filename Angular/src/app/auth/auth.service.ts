import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) {
    this.usersData = this.http.get("http://localhost:8085/niq/getdata")
  }
  
  usersData:any = [];
  authenticated: Boolean = false;

  postData(name:string, username:string, password:string){
    this.http.post("http://localhost:8085/niq/postdata", {"name": name, "username": username, "password": password}).subscribe()
  }

  logData(username:string, password:string){
    return this.http.get("http://localhost:8085/niq/logdata?username=" + username + "&password=" + password)
  }

}

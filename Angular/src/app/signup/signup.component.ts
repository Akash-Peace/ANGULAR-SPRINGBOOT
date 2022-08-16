import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.usersData.subscribe((arrayData:Array<string>) => {for(let i in arrayData){(this.users.push(arrayData[i]))}})
  }
  hide:boolean = false;
  name:string = "";
  username:string = "";
  password:string = "";
  usernameAlertMessage:string = "";
  passwordAlertMessage:string = "";
  users:Array<string> = []

  usernameConstraints(){
    if(this.username.includes(" ")){
      this.usernameAlertMessage = "Space not allowed!"
    } else if(this.username.match(/^[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~\d]+$/)){
      this.usernameAlertMessage = "Atleast one alphabet should be included!"
    } else {return false}
    return true;
  }

  passwordConstraints(){
    if(this.password.match(" ")){
      this.passwordAlertMessage = "Space not allowed!"
    } else if(this.password.length !== 0 && this.password.length < 4){
      this.passwordAlertMessage = "Password length is too short!"
    } else {return false}
    return true
  }

  usernameTaken(){
    this.usernameAlertMessage = "Username already taken!"
    return this.users.includes(this.username)
  }

  isUsernameAlertMessage(){
    this.usernameAlertMessage = ""
  }

  isPasswordAlertMessage(){
    this.passwordAlertMessage = ""
  }

  redirectToLoginPage(){
    this.router.navigate(["login"])
  }

  addUser(){
    this.authService.postData(this.name, this.username, this.password);
    this.authService.authenticated = true;
    this.router.navigate(["home"])
  }

}

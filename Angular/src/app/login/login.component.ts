import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }

  hide:boolean = true;
  username:string = "";
  password:string = "";
  usernameAlertMessage:string = "";
  passwordAlertMessage:string = "";

  logUser(){
    this.authService.logData(this.username, this.password).subscribe((validOrNot:any) => {if(validOrNot){
      this.authService.authenticated = true;
      this.router.navigate(["home"]);
    }})
  }
  

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

  isUsernameAlertMessage(){
    this.usernameAlertMessage = ""
  }

  isPasswordAlertMessage(){
    this.passwordAlertMessage = ""
  }

  redirectToSignupPage(){
    this.router.navigate(["signup"])
  }
}

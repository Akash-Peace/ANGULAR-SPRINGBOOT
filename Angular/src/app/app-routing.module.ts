import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DthreeComponent } from './dthree/dthree.component';
import { ErrorComponent } from './error.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path: "login", component: LoginComponent},
  {path: "signup", component: SignupComponent},
  {path: "home", component: HomeComponent},
  {path: "dthree", component: DthreeComponent},
  {path: "", component: HomeComponent},
  {path: "**", component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

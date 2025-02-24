import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicWebPageComponent } from './public-web-page/public-web-page.component';
import { LoginComponent } from './security/login/login.component';
import { SignUpComponent } from './security/sign-up/sign-up.component';

const routes: Routes = [
  {
    title: 'Heavy Weight | Home Page',
    path: '',
    component: PublicWebPageComponent
  },
  {
    title:'Heavy Weight | Home Page',
    path: 'home',
    component: PublicWebPageComponent 
  },
  {
    title: 'Heavy Weight | Login',
    path: 'security/login',
    component: LoginComponent
  },
  {
    title: 'Heavy Weight | Sign-up',
    path: 'security/sign-up',
    component: SignUpComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

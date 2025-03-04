import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicWebPageComponent } from './public-web-page/public-web-page.component';
import { LoginComponent } from './security/login/login.component';
import { SignUpComponent } from './security/sign-up/sign-up.component';
import { MainComponent } from './main/main.component';
import { authGuard } from './auth.guard';

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
    path: 'security/auth/login',
    component: LoginComponent
  },
  {
    title: 'Heavy Weight | Create account',
    path: 'security/auth/create-account',
    component: SignUpComponent
  },
   {
    title: 'Heavy Weight | Home',
    path: 'auth/shop',
    component: MainComponent,
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

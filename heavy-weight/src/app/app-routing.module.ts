import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicWebPageComponent } from './public-web-page/public-web-page.component';
import { LoginComponent } from './security/login/login.component';
import { SignUpComponent } from './security/sign-up/sign-up.component';
import { MainComponent } from './main/main.component';
import { authGuard } from './auth.guard';
import { AboutComponent } from './public-web-page/about/about.component';
import { CheckoutComponent } from './public-web-page/checkout/checkout.component';
import { FeaturesComponent } from './public-web-page/features/features.component';

const userId = 12342341234134;

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
    title:'Heavy Weight | About',
    path: 'about',
    component: AboutComponent
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
    path: `auth/user:${userId}/shop`,
    component: MainComponent,
   },
   {
    title: 'Heavy Weight | checkout',
    path: `auth/userid:${userId}/checkout`,
    component: CheckoutComponent,
   },
   {
    title: 'Heavy Weight | Features',
    path: `auth/userId:${userId}/Features`,
    component: FeaturesComponent,
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

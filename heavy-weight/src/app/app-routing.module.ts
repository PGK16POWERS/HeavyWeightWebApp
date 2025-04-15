import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicWebPageComponent } from './public-web-page/public-web-page.component';
import { LoginComponent } from './security/login/login.component';
import { SignUpComponent } from './security/sign-up/sign-up.component';
import { MainComponent } from './main/main.component';
import { authGuard } from './auth.guard';
import { AboutComponent } from './public-web-page/about/about.component';
import { CheckoutComponent } from './main/checkout/checkout.component';
import { FeaturesComponent } from './public-web-page/features/features.component';
import { BestSellersComponent } from './main/best-sellers/best-sellers.component';
import { SaleComponent } from './main/sale/sale.component';
import { CartComponent } from './main/cart/cart.component';
import { NewArrivalsComponent } from './main/new-arrivals/new-arrivals.component';
import { AccountComponent } from './main/account/account.component';

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


  // USER AUTH REDIRECTS 
   {
    title: 'Heavy Weight | Shop',
    path: `auth/user/shop`,
    component: MainComponent,
   },
   {
    title: 'Heavy Weight | Checkout',
    path: `auth/user/checkout`,
    component: CheckoutComponent,
   },
   {
    title: 'Heavy Weight | Features',
    path: `auth/user/features`,
    component: FeaturesComponent,
   },
   {
    title: 'Heavy Weight | Sale',
    path: `auth/user/sale`,
    component: SaleComponent,
   },
   {
    title: 'Heavy Weight | Best sellers',
    path: `auth/user/best-sellers`,
    component: BestSellersComponent,
   },
   {
    title: 'Heavy Weight | Cart',
    path: `auth/user/cart`,
    component: CartComponent,
   },
   {
    title: 'Heavy Weight | New Arrival',
    path: `auth/user/new-arrival`,
    component: NewArrivalsComponent,
   },
   {
    title: 'Heavy Weight | Account',
    path: `auth/user/account`,
    component: AccountComponent,
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

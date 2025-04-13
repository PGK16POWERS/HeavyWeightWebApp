import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PublicWebPageComponent } from './public-web-page/public-web-page.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './security/login/login.component';
import { SignUpComponent } from './security/sign-up/sign-up.component';
import { HeaderComponent } from './public-web-page/header/header.component';
import { ForgotPasswordComponent } from './security/login/forgot-password/forgot-password.component';
import { AppHeaderComponent } from './main/app-header/app-header.component';
import { AboutComponent } from './public-web-page/about/about.component';
import { CheckoutComponent } from './main/checkout/checkout.component';
import { FeaturesComponent } from './public-web-page/features/features.component';
import { SaleComponent } from './main/sale/sale.component';
import { BestSellersComponent } from './main/best-sellers/best-sellers.component';
import { CartComponent } from './main/cart/cart.component';
import { ProductDisplayComponent } from './main/product-display/product-display.component';

@NgModule({
  declarations: [
    AppComponent,
    PublicWebPageComponent,
    MainComponent,
    LoginComponent,
    SignUpComponent,
    HeaderComponent,
    ForgotPasswordComponent,
    AppHeaderComponent,
    AboutComponent,
    FeaturesComponent,
    CheckoutComponent,
    SaleComponent,
    BestSellersComponent,
    CartComponent,
    ProductDisplayComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterOutlet,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

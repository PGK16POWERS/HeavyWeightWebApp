import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-public-web-page',
  standalone: false,
  templateUrl: './public-web-page.component.html',
  styleUrl: './public-web-page.component.css'
})
export class PublicWebPageComponent implements OnInit {

  constructor(private router: Router) {}

  newsletterModel = {
    email: ''
  }

  ngOnInit(): void {
      
  }

  async subscribeNewsletter() {

  }

  redirectToShop() {
    this.router.navigateByUrl("/auth/shop")
  }

}

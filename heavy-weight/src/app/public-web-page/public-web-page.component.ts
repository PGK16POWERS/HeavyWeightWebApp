import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-public-web-page',
  standalone: false,
  templateUrl: './public-web-page.component.html',
  styleUrl: './public-web-page.component.css'
})
export class PublicWebPageComponent implements OnInit {

  newsletterModel = {
    email: ''
  }

  ngOnInit(): void {
      
  }

  async subscribeNewsletter() {

  }

}

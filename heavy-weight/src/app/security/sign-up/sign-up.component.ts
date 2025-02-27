import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  standalone: false,
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent implements OnInit {

  constructor(private router : Router) {}

  NewUserData ={
    email: '',
    password: '',
    first_name: '',
    last_name: ''
  }

  ngOnInit(): void {
      
  }

  async createAccountFunc() {

  }

  redirectFunc() {
    this.router.navigateByUrl("/security/auth/login")
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  constructor(private router: Router) {}

  UserData = {
    email: '',
    password: ''
  }

  ngOnInit(): void {
      
  }

  redirectFunc() {
    this.router.navigateByUrl('/security/auth/create-account');
  }

  async loginFunc() {
    
  }

}

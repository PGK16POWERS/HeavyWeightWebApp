import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-app-header',
  standalone: false,
  templateUrl: './app-header.component.html',
  styleUrl: './app-header.component.css'
})

export class AppHeaderComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit(): void {
      const userIcon = document.querySelector("#user-icon") as HTMLElement;

      userIcon.addEventListener("click", () => {
        this.router.navigateByUrl('/auth/user/account')
      })
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  standalone: false,
  templateUrl: './account.component.html',
  styleUrl: './account.component.css'
})
export class AccountComponent implements OnInit {

  ngOnInit(): void {
      //HEIGHT OPERATIONS
      const bodyHeight = document.body.clientHeight;
      const mainAppSection = document.querySelector("#main-app-section") as HTMLElement;
      mainAppSection.style.minHeight = bodyHeight + "px";
  }
}

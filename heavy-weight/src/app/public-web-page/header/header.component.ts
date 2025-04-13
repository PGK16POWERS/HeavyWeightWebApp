import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {

  userId: any|string;

constructor(private router: ActivatedRoute) {}

  ngOnInit(): void {
      const userId = 161616;
      this.userId = userId
      console.log("What you want it to be: " + userId);
  }
}

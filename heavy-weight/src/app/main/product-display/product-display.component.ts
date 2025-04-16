import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-display',
  standalone: false,
  templateUrl: './product-display.component.html',
  styleUrl: './product-display.component.css'
})
export class ProductDisplayComponent implements OnInit {

  ngOnInit(): void {
      // HEIGHT OPERATIONS
      const bodyHeight = document.body.clientHeight;
      const mainAppSection = document.querySelector("#main-app-section") as HTMLElement;
      mainAppSection.style.minHeight = bodyHeight + "px"; 
  }
}

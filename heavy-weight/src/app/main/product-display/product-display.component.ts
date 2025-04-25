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

      // SHOW AND HIDE OPERATIONS
      const showDescIcon = document.querySelector("#show-description") as HTMLElement;
      const hideDescIcon = document.querySelector("#hide-description") as HTMLElement;
      const descInfo = document.querySelector("#description-info") as HTMLElement;

      showDescIcon.addEventListener("click", () => {
        if (hideDescIcon.style.display = "none") {
          showDescIcon.style.display = "none";
          hideDescIcon.style.display = "flex";
          descInfo.style.display = "flex";
        }
      });

      hideDescIcon.addEventListener("click", () => {
        if (showDescIcon.style.display = "none") {
          showDescIcon.style.display = "flex";
          hideDescIcon.style.display = "none";
          descInfo.style.display = "none";
        }
      });

      const showDetIcon = document.querySelector("#show-details") as HTMLElement;
      const hideDetcIcon = document.querySelector("#hide-details") as HTMLElement;
      const detInfo = document.querySelector("#details-info") as HTMLElement;

      showDetIcon.addEventListener("click", () => {
        if (hideDetcIcon.style.display = "none") {
          showDetIcon.style.display = "none";
          hideDetcIcon.style.display = "flex";
          detInfo.style.display = "flex";
        }
      });
  }
}

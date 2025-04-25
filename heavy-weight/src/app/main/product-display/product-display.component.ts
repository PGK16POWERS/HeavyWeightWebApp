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

      hideDetcIcon.addEventListener("click", () => {
        if (showDetIcon.style.display = "none") {
          hideDetcIcon.style.display = "none";
          showDetIcon.style.display = "flex";
          detInfo.style.display = "none";
        }
      });

      const showRetPol = document.querySelector("#") as HTMLElement;
      const hideRetPol = document.querySelector("#") as HTMLElement;
      const returnPolicy = document.querySelector("#") as HTMLElement;

      showRetPol.addEventListener("click", () => {
        if(hideRetPol.style.display = "none") {
          showRetPol.style.display = "none";
          hideRetPol.style.display = "flex";
          returnPolicy.style.display = "flex";
        }
      });

      hideRetPol.addEventListener("click", () => {
        if(showRetPol.style.display = "none") {
          showRetPol.style.display = "flex";
          showRetPol.style.display = "none";
          returnPolicy.style.display = "none";
        }
      });

      const showWornWithIcon = document.querySelector("#") as HTMLElement;
      const hideWornWithIcon = document.querySelector("#") as HTMLElement;
      const wornWith = document.querySelector("#") as HTMLElement;

      showWornWithIcon.addEventListener("click", () => {
        if (hideWornWithIcon.style.display = "none") {
          showWornWithIcon.style.display = "none";
          hideWornWithIcon.style.display = "flex";
          wornWith.style.display = "flex";
        }
      })

      hideWornWithIcon.addEventListener("click", () => {
        if (showWornWithIcon.style.display = "none") {
          showWornWithIcon.style.display = "flex";
          hideWornWithIcon.style.display = "none";
          wornWith.style.display = "none";
        }
      })
  }
}

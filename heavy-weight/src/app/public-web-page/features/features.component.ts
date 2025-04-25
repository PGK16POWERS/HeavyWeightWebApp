import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-features',
  standalone: false,
  templateUrl: './features.component.html',
  styleUrl: './features.component.css'
})
export class FeaturesComponent implements OnInit {
  SortConfig = "Recommended";
  headerConfig = "Heavy Weight";

  features = [
    {
      productImageUrl: 'scooby-do-1.jpg',
      brandName: 'Heavy Weight',
      productName: 'Denim Genuine Tacker Jacket Black',
      productPrice: 500
    },
    {
      productImageUrl: 'scooby-do-2.jpg',
      brandName: 'Heavy Weight',
      productName: 'Signature Cargo Pants Olive',
      productPrice: 350
    },
  ]

  ngOnInit(): void {
      // HEIGHT OPERATIONS
      const bodyHeight = document.body.clientHeight;
      const mainAppSection = document.querySelector("#main-app-section") as HTMLElement;
      mainAppSection.style.minHeight = bodyHeight + "px";

      // SHOW MENU BARS
    const menuBars = document.querySelector("#menu-bar") as HTMLElement;
    const floatingMenu = document.querySelector("#floating-div") as HTMLElement;

    menuBars.addEventListener("click", (e) => {
      e.stopPropagation(); // Prevent it from triggering the body click
      floatingMenu.classList.add("active");
      document.body.style.position = "fixed";
    });
    
    // Close the menu when clicking outside
    document.addEventListener("click", (event) => {
      if (!floatingMenu.contains(event.target as Node) && event.target !== menuBars) {
        floatingMenu.classList.remove("active");
        document.body.style.position = "";
      }
    });
  }
}

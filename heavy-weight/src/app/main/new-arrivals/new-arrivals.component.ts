import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-arrivals',
  standalone: false,
  templateUrl: './new-arrivals.component.html',
  styleUrl: './new-arrivals.component.css',
})
export class NewArrivalsComponent implements OnInit, AfterViewInit {

  SortConfig = "Recommended";
  headerConfig = "Heavy Weight";

  constructor(private router: Router) {}

  products = [
    {
      productImageUrl: 'scooby-do-4.jpg',
      brandName: 'Heavy Weight',
      productName: 'Heavyweight Knit Sweater Navy',
      productPrice: 480
    },
    {
      productImageUrl: 'scooby-do-5.jpg',
      brandName: 'Heavy Weight',
      productName: 'Tactical Bomber Jacket Sand',
      productPrice: 600
    },
    {
      productImageUrl: 'scooby-do-6.jpg',
      brandName: 'Heavy Weight',
      productName: 'Utility Denim Jeans Indigo',
      productPrice: 370
    },
    {
      productImageUrl: 'scooby-do-7.jpg',
      brandName: 'Heavy Weight',
      productName: 'Embroidered Logo Tee Black',
      productPrice: 200
    },
    {
      productImageUrl: 'scooby-do-8.jpg',
      brandName: 'Heavy Weight',
      productName: 'Puffer Vest Arctic White',
      productPrice: 450
    },
    {
      productImageUrl: 'scooby-do-9.jpg',
      brandName: 'Heavy Weight',
      productName: 'Loose Fit Sweatpants Charcoal',
      productPrice: 300
    },
    {
      productImageUrl: 'scooby-do-10.jpg',
      brandName: 'Heavy Weight',
      productName: 'Heavyweight Fleece Jacket Forest Green',
      productPrice: 550
    }
  ];

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

  ngAfterViewInit(): void {
      // PRODUCT DISPLAY OPERATIONS
      const individualProduct = document.querySelectorAll(".product") as NodeListOf<HTMLElement>;

      individualProduct.forEach((product:any) => {
        product.addEventListener("click", () => {
          this.router.navigateByUrl("/auth/user/product-display");
        })
      })
  }

}

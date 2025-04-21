import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-public-web-page',
  standalone: false,
  templateUrl: './public-web-page.component.html',
  styleUrl: './public-web-page.component.css'
})
export class PublicWebPageComponent implements OnInit {

  constructor(private router: Router) {}

  newsletterModel = {
    email: ''
  }

  ngOnInit(): void {
      // HERO IMAGE FUNCTIONALITY
      let imageArray = [`/products/LouisFeat1.webp`, `/products/New_home_page.jpg`, `/products/LouisFeat3.jpg`];
      let currentIndex = 0;

      const heroSectionBg = document.querySelector("#hero-section") as HTMLElement;
      const progressFills = document.querySelectorAll(".progress-fill") as NodeListOf<HTMLElement>;
      
      function updateHeroBackground(): void {
        // Update hero image
        heroSectionBg.style.backgroundImage = `url(${imageArray[currentIndex]})`;
      
        // Reset all progress fills
        progressFills.forEach(fill => {
          fill.style.width = "0%";
        });
      
        // Trigger the active one
        const activeFill = progressFills[currentIndex];
      
        // Small delay to allow the reset above to take effect before transition
        setTimeout(() => {
          activeFill.style.width = "100%";
        }, 50);
      
        // Move to next image
        currentIndex = (currentIndex + 1) % imageArray.length;
      }

      // Start the slideshow
      updateHeroBackground(); // Set initial image
      setInterval(updateHeroBackground, 5000); // Change every 3 seconds

      // REDIRECT TO SHOP ON PRODUCT CLICK
      const getAllHeavyWeightRecommendedProducts = document.querySelectorAll(".heavy-weight-recom-prod") as NodeListOf<HTMLElement>;
      getAllHeavyWeightRecommendedProducts.forEach(product => {
        product.addEventListener("click", () => {
          this.router.navigateByUrl("/auth/user/shop");
        });
      });

      // SHOW MENU BARS
      const menuBars = document.querySelector("#menu-bar") as HTMLElement;
      const floatingMenu = document.querySelector("#floating-div") as HTMLElement;

      menuBars.addEventListener("click", () => {
        floatingMenu.style.display = "flex"
        document.body.style.position = "fixed"
      })
  }

  async subscribeNewsletter() {

  }

  redirectToShop() {
    this.router.navigateByUrl("/auth/user/shop");
  }

}

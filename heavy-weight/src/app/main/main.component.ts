import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs';

@Component({
  selector: 'app-main',
  standalone: false,
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent implements OnInit {

  SortConfig = "Recommended";
  headerConfig = "Heavy Weight";

  ngOnInit(): void {

      // SORT FUNCTIONALITY
      const sortTitle = document.querySelector("#sort-floating-title") as HTMLElement;
      const sortFloatingDiv = document.querySelector(".sort-floating-menu") as HTMLElement;
      const sortLinks = document.querySelectorAll(".sort-link") as NodeListOf<HTMLElement>;

      let flag = false

      sortTitle.addEventListener("click", (event) => {
        event.stopPropagation();

        if (flag == false) {
          sortFloatingDiv.style.display = "flex";
          flag = true;
        } else {
          sortFloatingDiv.style.display = "none";
          flag = false
        }
        
      });

      document.addEventListener("click", (event:any) =>{

        if (flag == true && !sortFloatingDiv.contains(event.target)) {
          sortFloatingDiv.style.display = "none";
          flag = false
        }

      })

      sortLinks.forEach(link => {
        link.addEventListener("click", () => {
          if (link.textContent == "Accessories") {
            this.headerConfig = "Accessories";
            this.SortConfig = "Accessories";
          } else if(link.textContent == "Recommended") {
            this.SortConfig = "Recommended";
            this.headerConfig = "Heavy Weight";
          } else if (link.textContent == "Head wear"){
            this.SortConfig = "Head wear";
            this.headerConfig = "Head wear";
          } else if (link.textContent =="Shirts") {
            this.SortConfig = "Shirts";
            this.headerConfig = "Shirts";
          } else if (link.textContent == "Bottoms") {
            this.SortConfig = "Bottoms";
            this.headerConfig = "Bottoms";
          } else if (link.textContent == "Bags") {
            this.SortConfig = "Bags";
            this.headerConfig = "Bags";
          }
        });
      });

      // FILTER OPERATIONS
      const filterTitle = document.querySelector("#floating-filter-div") as HTMLElement;
      const filterFloatingDiv = document.querySelector(".filter-floating-menu") as HTMLElement;

      let filterFlag = false;

      filterTitle.addEventListener("click", (event) => {
        event.stopPropagation();

        if (filterFlag == false) {
          filterFloatingDiv.style.display = "flex";
          filterFlag = true;
        } else {
          filterFloatingDiv.style.display = "none";
          filterFlag = false;
        }
      });

      document.addEventListener("click", (event:any) => {

        if(filterFlag == true && !filterFloatingDiv.contains(event.target)) {
          filterFloatingDiv.style.display = "none";
          filterFlag = false;
        }

      })


  }

  products = [
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
    {
      productImageUrl: 'scooby-do-3.jpg',
      brandName: 'Heavy Weight',
      productName: 'Oversized Hoodie Ash Grey',
      productPrice: 420
    },
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
  

  /* 
    <div class="product">
    <div class="prod-img-div"></div>

    <div class="prduct-details">
        <span class="brand-name">Heavy Weight</span>
        <span class="product-name">Denim Genuine Tacker Jacket Black</span>
        <span class="product-price">R500</span>
    </div>
    </div>
  */

}

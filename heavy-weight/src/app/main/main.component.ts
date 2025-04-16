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

    this.checkSortState();

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

      });

      sortLinks.forEach(link => {
        link.addEventListener("click", () => {
          if (link.textContent == "Accessories") {
            this.headerConfig = "Accessories";
            this.SortConfig = "Accessories";
            sessionStorage.setItem("SortState", "Accessories");
          } else if(link.textContent == "Recommended") {
            this.SortConfig = "Recommended";
            this.headerConfig = "Heavy Weight";
            sessionStorage.setItem("SortState", "Recommended");
          } else if (link.textContent == "Head wear"){
            this.SortConfig = "Head wear";
            this.headerConfig = "Head wear";
            sessionStorage.setItem("SortState", "Head wear");
          } else if (link.textContent =="Shirts") {
            this.SortConfig = "Shirts";
            this.headerConfig = "Shirts";
            sessionStorage.setItem("SortState", "Shirts");
          } else if (link.textContent == "Bottoms") {
            this.SortConfig = "Bottoms";
            this.headerConfig = "Bottoms";
            sessionStorage.setItem("SortState", "Bottoms");
          } else if (link.textContent == "Bags") {
            this.SortConfig = "Bags";
            this.headerConfig = "Bags";
            sessionStorage.setItem("SortState", "Bags");
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

      });

    // FILTER BUTTON OPERATIONS
    const filterButton = document.querySelector("#filter-btn") as HTMLButtonElement;



  }

  checkSortState() {

    const sortState = sessionStorage.getItem("SortState");
    
    // ACCESS HEADER AND SORT TITLE
    this.SortConfig = sortState || 'Recommended';
    this.headerConfig = sortState || 'Recommended';

  }

  products = [
    {
      productImageUrl: 'scooby-do-1.jpg',
      brandName: 'Heavy Weight',
      productName: 'Denim Genuine Tacker Jacket Black',
      color: 'black',
      productPrice: 500,
      category: 'Accessories'
    },
    {
      productImageUrl: 'scooby-do-2.jpg',
      brandName: 'Heavy Weight',
      productName: 'Signature Cargo Pants Olive',
      color: 'black',
      productPrice: 350,
      category: 'Accessories'
    },
    {
      productImageUrl: 'scooby-do-3.jpg',
      brandName: 'Heavy Weight',
      productName: 'Oversized Hoodie Ash Grey',
      color: 'black',
      productPrice: 420,
      category: 'Head wear'
    },
    {
      productImageUrl: 'scooby-do-4.jpg',
      brandName: 'Heavy Weight',
      productName: 'Heavyweight Knit Sweater Navy',
      color: 'ash',
      productPrice: 480,
      category: 'Head wear'
    },
    {
      productImageUrl: 'scooby-do-5.jpg',
      brandName: 'Heavy Weight',
      productName: 'Tactical Bomber Jacket Sand',
      color: 'ash',
      productPrice: 600,
      category: 'Shirts'
    },
    {
      productImageUrl: 'scooby-do-6.jpg',
      brandName: 'Heavy Weight',
      productName: 'Utility Denim Jeans Indigo',
      color: 'ash',
      productPrice: 370,
      category: 'Shirts'
    },
    {
      productImageUrl: 'scooby-do-7.jpg',
      brandName: 'Heavy Weight',
      productName: 'Embroidered Logo Tee Black',
      color: 'grey',
      productPrice: 200,
      category: 'Shirts'
    },
    {
      productImageUrl: 'scooby-do-8.jpg',
      brandName: 'Heavy Weight',
      productName: 'Puffer Vest Arctic White',
      color: 'grey',
      productPrice: 450,
      category: 'Bottoms'
    },
    {
      productImageUrl: 'scooby-do-9.jpg',
      brandName: 'Heavy Weight',
      productName: 'Loose Fit Sweatpants Charcoal',
      color: 'grey',
      productPrice: 300,
      category: 'Bags'
    },
    {
      productImageUrl: 'scooby-do-10.jpg',
      brandName: 'Heavy Weight',
      productName: 'Heavyweight Fleece Jacket Forest Green',
      color: 'grey',
      productPrice: 550,
      category: 'Bottoms'
    }
  ];

  filteredProducts = [...this.products]

  selectedColors: string[] = []

  handleCheckBoxChange (event: any) {
    const checkbox = event.target;
    const value = checkbox.name.toLowerCase();

    if (checkbox.checked) {
      this.selectedColors.push(value)
    } else {
      this.selectedColors = this.selectedColors.filter(c => c !== value)
    }
    
  }

  applyFilter() {
    if (this.selectedColors.length == 0) {
      this.filteredProducts = [...this.products]
    } else {
      this.filteredProducts = this.products.filter(product =>
        this.selectedColors.includes(product.color.toLowerCase())
      );
    }
  }

  sortFunction(category : string) {
    if (category == 'all') {
      this.filteredProducts = [...this.products];
    } else {
      this.filteredProducts = this.products.filter(product => 
        product.category === category
      );
    }
    
  }

  applyPriceFilter(option : string) {
    if (option == "low") {
      this.filteredProducts.sort((a, b) => a.productPrice - b.productPrice);
    }
  }

}

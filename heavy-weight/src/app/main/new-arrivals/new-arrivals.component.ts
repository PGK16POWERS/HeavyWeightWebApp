import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-arrivals',
  standalone: false,
  templateUrl: './new-arrivals.component.html',
  styleUrl: './new-arrivals.component.css',
})
export class NewArrivalsComponent implements OnInit {

  SortConfig = "Recommended";
  headerConfig = "Heavy Weight";

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
      
  }

}

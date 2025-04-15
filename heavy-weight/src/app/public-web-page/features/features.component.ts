import { Component } from '@angular/core';

@Component({
  selector: 'app-features',
  standalone: false,
  templateUrl: './features.component.html',
  styleUrl: './features.component.css'
})
export class FeaturesComponent {
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
}

import { Component, OnInit } from '@angular/core';

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

  }

}

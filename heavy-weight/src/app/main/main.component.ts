import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  standalone: false,
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent implements OnInit {

  SortConfig = "Recommended";

  ngOnInit(): void {
      // SORT FUNCTIONALITY
      const sortTitle = document.querySelector("#sort-floating-title") as HTMLElement;
      const sortFloatingDiv = document.querySelector(".sort-floating-menu") as HTMLElement;

      let flag = false

      sortTitle.addEventListener("click", () => {

        if (flag == false) {
          sortFloatingDiv.style.display = "flex";
          flag = true;
        } else {
          sortFloatingDiv.style.display = "none";
          flag = false
        }
        
      })
  }

}

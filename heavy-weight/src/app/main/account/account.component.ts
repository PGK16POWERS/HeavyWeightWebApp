import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  standalone: false,
  templateUrl: './account.component.html',
  styleUrl: './account.component.css'
})
export class AccountComponent implements OnInit {

  ngOnInit(): void {
      //HEIGHT OPERATIONS
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

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: false,
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit {

  ngOnInit(): void {

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

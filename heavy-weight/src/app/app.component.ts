import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    standalone: false
})
export class AppComponent implements OnInit {
  title = 'heavy-weight';

  ngAfterViewInit(): void {
    this.hideSplashScreen();
  }

  hideSplashScreen(): void {
    const splash = document.getElementById("splashscreen");

    if (splash) {
      splash.style.opacity = '0';
      setTimeout(() => splash.remove(), 900); // Optionally, add a fade-out effect
    }

  }

  ngOnInit(): void {
    // SET MIN HEIGHT TO FULL SIZE
    const mainAppFrame = document.querySelector(".main-app-frame") as HTMLElement;
    const screenHeight = document.body.clientHeight
    mainAppFrame.style.minHeight = screenHeight + "px"
  }
  
}

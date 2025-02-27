import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    standalone: false
})
export class AppComponent {
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
  
}

import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('study-angular');

  showSocial = false;

  toggleSocialMenu() {
    this.showSocial = !this.showSocial;
    console.log('Show social menu:', this.showSocial);
  }
}

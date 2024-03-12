import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
})
export class NavBarComponent {
  auth = inject(AuthService);
  name: string | null;
  userProfilImg: string | null;
  email: string | null;

  constructor() {
    const loggedInUser = sessionStorage.getItem('loggedInUser');
    if (loggedInUser) {
      this.name = JSON.parse(loggedInUser).name;
      this.userProfilImg = JSON.parse(loggedInUser).picture;
      this.email = JSON.parse(loggedInUser).email;
    } else {
      this.name = null;
      this.userProfilImg = null;
      this.email = null;
    }
  }

  signOut() {
    sessionStorage.removeItem('loggedInUser');
    this.auth.signOut();
  }
}

import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule, RouterLink, FontAwesomeModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
})
export class NavBarComponent {
  auth = inject(AuthService);
  name: string | null;
  email: string | null;
  faBars = faBars;
  faRightFromBracket = faRightFromBracket;

  menuVisible = false;

  constructor() {
    const loggedInUser = sessionStorage.getItem('loggedInUser');
    if (loggedInUser) {
      this.name = JSON.parse(loggedInUser).name;
      this.email = JSON.parse(loggedInUser).email;
      console.log(this.name, this.email);
    } else {
      this.name = null;
      this.email = null;
    }
  }

  signOut() {
    sessionStorage.removeItem('loggedInUser');
    this.auth.signOut();
  }

  toggle() {
    this.menuVisible = !this.menuVisible;
  }
}

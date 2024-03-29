import { Component } from '@angular/core';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [NavBarComponent],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.css',
})
export class NotFoundComponent {
  constructor() {
    const loggedInUser = sessionStorage.getItem('loggedInUser');
    if(!loggedInUser) window.location.href = '/';
  }
}

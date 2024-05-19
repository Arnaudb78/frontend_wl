import { Component } from '@angular/core';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';
import { FooterComponent } from '../../component/footer/footer.component';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [NavBarComponent, FooterComponent],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.css',
})
export class NotFoundComponent {
  constructor() {
    const loggedInUser = sessionStorage.getItem('loggedInUser');
    if(!loggedInUser) window.location.href = '/';
  }
}

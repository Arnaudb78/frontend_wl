import { Component } from '@angular/core';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [NavBarComponent],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css',
})
export class SettingsComponent {
  constructor() {
    const loggedInUser = sessionStorage.getItem('loggedInUser');
    if(!loggedInUser) window.location.href = '/';
  }
}

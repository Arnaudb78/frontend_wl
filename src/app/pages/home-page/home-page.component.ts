import { Component } from '@angular/core';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';
import { MapComponent } from '../../components/map/map.component';
import { HistoryCardComponent } from '../../components/history-card/history-card.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [NavBarComponent, MapComponent, HistoryCardComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent {
  constructor() {
    const loggedInUser = sessionStorage.getItem('loggedInUser');
    if (!loggedInUser) window.location.href = '/';
  }
}

import { Component } from '@angular/core';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';
import { MapComponent } from '../../components/map/map.component';
import { HistoryBarComponent } from '../../components/history-bar/history-bar.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [NavBarComponent, MapComponent, HistoryBarComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent {

  constructor() {
  const loggedInUser = sessionStorage.getItem('loggedInUser');
  if(!loggedInUser) window.location.href = '/';
}
}

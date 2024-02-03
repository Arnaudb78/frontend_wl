import { Component } from '@angular/core';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';
import { MapComponent } from '../../components/map/map.component';
// import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [NavBarComponent, MapComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent {}

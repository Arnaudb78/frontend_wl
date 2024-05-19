import { Component, OnInit } from '@angular/core';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';
import { MapComponent } from '../../components/map/map.component';
import { FooterComponent } from '../../component/footer/footer.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [NavBarComponent, MapComponent, FooterComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent implements OnInit{
  ngOnInit(): void {}
  constructor() {
    const loggedInUser = sessionStorage.getItem('loggedInUser');
    if (!loggedInUser) window.location.href = '/';
  }
}

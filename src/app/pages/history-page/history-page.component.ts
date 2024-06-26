import { Component } from '@angular/core';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';
import { HistoryComponent } from '../../components/history/history.component';
import { FooterComponent } from '../../component/footer/footer.component';

@Component({
  selector: 'app-history-page',
  standalone: true,
  imports: [NavBarComponent, HistoryComponent, FooterComponent],
  templateUrl: './history-page.component.html',
  styleUrl: './history-page.component.css',
})
export class HistoryPageComponent {
  constructor() {
    const loggedInUser = sessionStorage.getItem('loggedInUser');
    if (!loggedInUser) window.location.href = '/';
  }
}

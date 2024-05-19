import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';
import { FooterComponent } from '../../component/footer/footer.component';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [CardComponent, NavBarComponent, FooterComponent],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css',
})
export class SignInComponent {

}

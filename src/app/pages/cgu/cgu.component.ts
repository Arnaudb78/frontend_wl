import { Component } from '@angular/core';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';
import { FooterComponent } from '../../component/footer/footer.component';

@Component({
  selector: 'app-cgu',
  standalone: true,
  imports: [NavBarComponent, FooterComponent],
  templateUrl: './cgu.component.html',
  styleUrl: './cgu.component.css'
})
export class CguComponent {

}

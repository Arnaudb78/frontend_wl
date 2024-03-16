declare var google: any;
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  constructor(private http: HttpClient) {}
  async loginWithGoogle() {
    console.log("Let's go back !!!");
    try {
      const code = 'test envoie back';
      const response = await this.http
        .post<any>('http://localhost:5000/google-auth', { code })
        .toPromise();
      console.log(response);
      // Gérez la réponse de votre backend ici
    } catch (error) {
      console.error('Error during Google authentication:', error);
      // Gérez l'erreur ici
    }
  }
}

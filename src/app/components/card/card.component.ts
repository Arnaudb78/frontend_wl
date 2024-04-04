declare var google: any;
import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent implements OnInit {
  private router = inject(Router);
  ngOnInit(): void {
    google.accounts.id.initialize({
      client_id:
        '863412296645-pdjr2r8oid6tppv09gtsoi7i9ff1qkb2.apps.googleusercontent.com',
      callback: (resp: any) => this.handleLogin(resp),
    });

    google.accounts.id.renderButton(document.getElementById('google-btn'), {
      theme: 'filled_blue',
      size: 'large',
      shape: 'rectangle',
      width: 200,
    });
  }

  private decodeToken(token: string) {
    return JSON.parse(atob(token.split('.')[1]));
  }

  async handleLogin(response: any) {
    if (!response) throw new Error('No response from Google Accounts');
    const payLoad = this.decodeToken(response.credential);
    // store the user in session storage
    sessionStorage.setItem('loggedInUser', JSON.stringify(payLoad));
    await this.connectWithGoogle(payLoad);
  }

  async connectWithGoogle(data: { email: string }) {
    if (!data) throw new Error('No data received');
    const email = encodeURIComponent(data.email);
    const response = await fetch(
      `http://localhost:5001/user/email?email=${email}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    if (!response.ok) console.log('Error connecting to the backend:', response);
    const responseData = await response.json();
    console.log('Response data:', responseData);
    if (!responseData.result) this.inscriptionWithGoogle(data);
    this.router.navigate(['/home']);
  }

  async inscriptionWithGoogle(data: object) {
    try {
      const response = await fetch('http://localhost:5001/user/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error('User email not verified');
      this.router.navigate(['/home']);
    } catch (error) {
      console.error('Error connecting to the backend:', error);
    }
  }
}

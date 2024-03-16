declare var google: any;
import { Component, OnInit, inject } from '@angular/core';
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

  handleLogin(response: any) {
    if (!response) throw new Error('No response from Google Accounts');
    // decode the token to get the payload
    const payLoad = this.decodeToken(response.credential);
    // store the user in session storage
    sessionStorage.setItem('loggedInUser', JSON.stringify(payLoad));
    //save the user to the backend
    this.connectToBackend(payLoad);
    // navigate to the home page
    this.router.navigate(['/home']);
  }

  async connectToBackend(data: object) {
    try {
      // Make a request to your backend API
      const response = await fetch('http://localhost:5001/user/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      
      // Check if the request was successful
      if (response.ok) {
        // Process the response data
        const data = await response.json();
        
        // Do something with the data
        
      } else {
        throw new Error('Failed to connect to the backend');
      }
    } catch (error) {
      console.error('Error connecting to the backend:', error);
    }
  }
}

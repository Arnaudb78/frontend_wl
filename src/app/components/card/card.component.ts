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
    const payLoad = this.decodeToken(response.credential);
    // store the user in session storage
    sessionStorage.setItem('loggedInUser', JSON.stringify(payLoad));
    this.connectToBackend(payLoad);
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

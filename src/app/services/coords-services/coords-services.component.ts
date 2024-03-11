import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { environnement } from '../../../environnement/environnement';

@Component({
  selector: 'app-coords-services',
  standalone: true,
  imports: [],
  templateUrl: './coords-services.component.html',
  styleUrl: './coords-services.component.css'
})
export class CoordsServicesComponent {

  COORDS_URL = '/api/coords';

  constructor(
    private httpClient: HttpClient
  ) { 
  }


  coordinates(lat: number, lng: number) {
    const coordsData = {
      lat: lat,
      lon: lng
    };

    return new Observable<boolean | null>(observer => {
      console.log('sending coords', coordsData);
      console.log(environnement.API_URL + this.COORDS_URL);
      this.httpClient.post(environnement.API_URL + this.COORDS_URL, coordsData).subscribe(
        (response: any) => {
          observer.next(response);
          observer.complete();
        },
        (error) => {
          observer.error(error);
          observer.complete();
        }
      )
    });
  }
}

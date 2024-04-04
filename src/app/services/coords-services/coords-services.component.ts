import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { environnement } from '../../../environnement/environnement';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-coords-services',
  standalone: true,
  imports: [NgIf],
  templateUrl: './coords-services.component.html',
  styleUrl: './coords-services.component.css',
})
export class CoordsServicesComponent {
  COORDS_URL = '/api/coords';
  data = {};

  constructor(private httpClient: HttpClient) {}

  coordinates(lat: number, lng: number): Observable<any> {
    const coordsData = {
      lat: lat,
      lon: lng,
    };

    return new Observable((observer) => {
      this.httpClient
        .post(environnement.BACK_URL + this.COORDS_URL, coordsData)
        .subscribe(
          (response: any) => {
            console.log(response);
            const data = {
              city: response.city,
              date: response.date,
              desc: response.desc,
              temp: response.temp,
              temp_min: response.temp_min,
              temp_max: response.temp_max,
              humidity: response.humidity,
            };
            observer.next(data);
            observer.complete();
          },
          (error) => {
            observer.error(error);
            observer.complete();
          }
        );
    });
  }
}

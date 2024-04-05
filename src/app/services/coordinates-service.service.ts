import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environnement } from '../../environnement/environnement';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CoordinatesService {
  constructor(private httpClient: HttpClient) {}
  COORDS_URL = '/api/coords';

  coordinates(data: any): Observable<any> {
    return this.httpClient.post(environnement.BACK_URL + this.COORDS_URL, data);
  }
}

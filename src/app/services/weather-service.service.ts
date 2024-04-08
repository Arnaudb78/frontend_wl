import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environnement } from '../../environnement/environnement';

interface WeatherHistoryEntry {
  city: string;
  date: string;
  desc: string;
  temp: number;
  temp_min: number;
  temp_max: number;
  humidity: number;
}

type WeatherHistory = WeatherHistoryEntry[];

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private httpClient: HttpClient) {}

  COORDS_URL = '/api/';
  ROUTE_URL = 'coords';

  coordinates(lat: number, lon: number, email: string) {
    return this.httpClient.post<WeatherHistoryEntry>(
      environnement.BACK_URL + this.COORDS_URL + this.ROUTE_URL,
      {
        lat,
        lon,
        email,
      }
    );
  }

  getHistory(email: string) {
    return this.httpClient.get<WeatherHistory>(
      environnement.BACK_URL + this.COORDS_URL,
      {
        params: {
          email,
        },
      }
    );
  }
}

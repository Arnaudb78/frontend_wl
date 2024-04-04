import {
  AfterViewInit,
  Component,
  NgModule,
  OnDestroy,
  OnInit,
} from '@angular/core';
import * as L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { CoordinatesService } from '../../services/coordinates-service.service';
import { lastValueFrom } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { RouterLink } from '@angular/router';

type coordData = {
  city: string;
  date: string;
  desc: string;
  temp: number;
  temp_min: number;
  temp_max: number;
  humidity: number;
};

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [HttpClientModule, RouterLink],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css',
  providers: [],
})
export class MapComponent implements OnInit, OnDestroy {
  constructor(private coordinatesService: CoordinatesService) {}

  ngOnInit(): void {
    this.getCurrentLocation();
  }

  ngOnDestroy(): void {
    this.map.remove();
  }

  // @ts-ignore
  private map: L.Map;

  public data!: coordData;

  private smallIcon = new L.Icon({
    iconUrl:
      'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-icon.png',
    iconRetinaUrl:
      'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-icon-2x.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl:
      'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    shadowSize: [41, 41],
  });

  ngAfterViewInit(): void {
    this.getCurrentLocation();
  }
  async getData(lat: number, lng: number) {
    let res = await lastValueFrom(
      this.coordinatesService.coordinates(lat, lng)
    );
    console.log(res);
    this.data = {
      city: res.city,
      date: res.date,
      desc: res.desc,
      temp: res.temp,
      temp_min: res.temp_min,
      temp_max: res.temp_max,
      humidity: res.humidity,
    };
    return res;
  }
  getCurrentLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const coords = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          this.data = await this.getData(coords.lat, coords.lng);

          this.createMap(coords);
          this.addMarker({ coords, text: 'Vous êtes ici', open: true });
        },
        (error) => {
          console.error('Error getting location', error);
          // Fallback sur une position par défaut
          this.createMap({ lat: 48.8323, lng: 2.4075 });
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
      // Fallback sur une position par défaut
      this.createMap({ lat: 48.8323, lng: 2.4075 });
    }
  }

  createMap(coords: { lat: number; lng: number }) {
    const zoomLevel = 17;

    if (this.map) {
      this.map.remove();
    }

    this.map = L.map('map', {
      center: [coords.lat, coords.lng],
      zoom: zoomLevel,
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      minZoom: 12,
      maxZoom: 17,
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.map);
  }

  addMarker({
    coords,
    text,
    open,
  }: {
    coords: { lat: number; lng: number };
    text: string;
    open: boolean;
  }) {
    const marker = L.marker([coords.lat, coords.lng], { icon: this.smallIcon });
    marker.addTo(this.map).bindPopup(text, { autoClose: false });
    if (open) {
      marker.openPopup();
    }
  }

  redirectHistory() {
    window.location.href = '/history';
  }
}

import { AfterViewInit, Component, NgModule } from '@angular/core';
import * as L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { CoordsServicesComponent } from '../../services/coords-services/coords-services.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [CoordsServicesComponent, HttpClientModule, RouterLink],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css',
  providers: [CoordsServicesComponent],
})
export class MapComponent implements AfterViewInit {
  constructor(private coordinatesService: CoordsServicesComponent) {}

  // @ts-ignore
  private map: L.Map;

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

  getCurrentLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const coords = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          this.coordinatesService
            .coordinates(coords.lat, coords.lng)
            .subscribe((result) => {
              if (!result) throw new Error('No response from the server');
            });

          this.createMap(coords);
          this.addMarker({ coords, text: 'Vous êtes ici', open: true });
        },
        (error) => {
          console.error('Error getting location', error);
          // Fallback sur une position par défaut
          this.createMap({ lat: 48.114384, lng: -1.669494 });
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
      // Fallback sur une position par défaut
      this.createMap({ lat: 48.114384, lng: -1.669494 });
    }
  }

  createMap(coords: { lat: number; lng: number }) {
    const zoomLevel = 17;

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

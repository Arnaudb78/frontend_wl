import { Component, OnDestroy, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather-service.service';
import { CommonModule, NgIf } from '@angular/common';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './history.component.html',
  styleUrl: './history.component.css',
})
export class HistoryComponent implements OnInit, OnDestroy {
  historyData: any[] = [];
  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.loadHistory();
  }

  ngOnDestroy(): void {
    this.historyData = [];
  }

  async loadHistory() {
    const loggedInUser = JSON.parse(sessionStorage.getItem('loggedInUser')!);
    const userEmail = loggedInUser['email'];
    const history = await lastValueFrom(
      this.weatherService.getHistory(userEmail)
    );
    if (!history) throw new Error('No history found');
    this.historyData = history.map((entry) => {
      return {
        ...entry,
        date: new Date(Number.parseInt(entry.date)).toLocaleString('fr-FR'),
      };
    });
  }
}

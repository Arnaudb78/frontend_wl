import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HistoryPageComponent } from './pages/history-page/history-page.component';

export const routes: Routes = [
  { path: '', component: SignInComponent },
  { path: 'home', component: HomePageComponent},
  { path: 'history', component: HistoryPageComponent },
  { path: '**', component: NotFoundComponent },
];

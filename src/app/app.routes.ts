import { provideRouter, RouterConfig } from '@angular/router';

import {DashboardComponent} from './dashboard.component';
import {HeroDetailComponent} from "./hero-detail.component";
import {HeroesComponent} from './heroes.component';


export const routes: RouterConfig = [
  { path: '/heroes', component: HeroesComponent },
  { path: '/hero/:id', component: HeroDetailComponent },
  { path: '/dashboard', component: DashboardComponent }

];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];

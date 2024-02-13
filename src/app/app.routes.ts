import { Routes } from '@angular/router';
import { CalculusPageComponent } from './calculus-page/calculus-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

export const routes: Routes = [


    { path: '', component: LandingPageComponent },
    { path: 'calculus-page', component: CalculusPageComponent }

];

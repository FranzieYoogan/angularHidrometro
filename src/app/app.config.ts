import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { HeaderComponent } from './header/header.component';
import { CalculusPageComponent } from './calculus-page/calculus-page.component';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(),HeaderComponent,CalculusPageComponent]
};

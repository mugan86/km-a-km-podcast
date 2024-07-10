import { ApplicationConfig, isDevMode, provideZoneChangeDetection } from '@angular/core';
import { PreloadAllModules, provideRouter, withDebugTracing, withPreloading } from '@angular/router';

import { APP_ROUTES} from './app.routes';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideHttpClient(),
    // provider to inject routes, preload all modules and trace route change events
    isDevMode()
      ? provideRouter(
          APP_ROUTES,
          withPreloading(PreloadAllModules),
          withDebugTracing()
        )
      : provideRouter(APP_ROUTES, withPreloading(PreloadAllModules)),
  ],
};



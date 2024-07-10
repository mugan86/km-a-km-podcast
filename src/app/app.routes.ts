import { Route, Routes } from '@angular/router';

// lazy-load standalone component
export const APP_ROUTES: Route[] = [{
    path: 'pokemon',
    loadComponent: () => import('./pokemon/pokemon.component')
      .then(mod => mod.PokemonComponent)
  }, 
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('./home/home.component').then(mod => mod.HomeComponent)
  },
  {
    path: '**',
    loadComponent: () => import('./page-not-found/page-not-found.component')
      .then(mod => mod.PageNotFoundComponent)
  }];

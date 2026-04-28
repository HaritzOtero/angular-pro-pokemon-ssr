import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'pokemons/page/:page',
    loadComponent: () => import('./pages/pokemons/pokemons-page'),
  },
  {
    path: 'pokemons/:id',
    loadComponent: () => import('./pages/pokemon-page/pokemon-page'),
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about-page'),
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/about-page/contact-page'),
  },
  {
    path: 'pricing',
    loadComponent: () => import('./pages/pricing/about-page/pricing-page'),
  },

  {
    path: 'pokemons',
    redirectTo: 'pokemons/page/1',
    pathMatch: 'full',
  },

  {
    path: '**',
    redirectTo: 'pokemons/page/1',
  },
];

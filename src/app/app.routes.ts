import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about-page')
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/about-page/contact-page')
  },
  {
    path: 'pricing',
    loadComponent: () => import('./pages/pricing/about-page/pricing-page')
  },
  {
    path: '**',
    redirectTo: 'about'
  }
];

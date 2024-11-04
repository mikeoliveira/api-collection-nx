import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadChildren: () => import('@api-rick-morty/home').then(m => m.homeRoutes),
  }
];

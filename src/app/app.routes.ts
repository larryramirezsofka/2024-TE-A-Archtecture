import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () => import('./private/private.module')
      .then((module) => module.PrivateModule)
  },
  {
    path: '',
    loadChildren: () => import('./public/public.module')
      .then((module) => module.PublicModule)
  },
  {
    path: '**',
    redirectTo: ''
  }
];

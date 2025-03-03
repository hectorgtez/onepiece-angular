import { Routes } from '@angular/router';
import { AuthLayoutComponent } from '@layouts/auth-layout/auth-layout.component';
import { PageLayoutComponent } from '@layouts/page-layout/page-layout.component';

export const routes: Routes = [
  {
    path: 'auth',
    component: AuthLayoutComponent,
    children: [
      {
        path: 'register',
        loadComponent: () => import('@auth/register/register.component').then(c => c.RegisterComponent)
      },
      {
        path: 'login',
        loadComponent: () => import('@auth/login/login.component').then(c => c.LoginComponent)
      },
      {
        path: '**',
        redirectTo: 'login'
      },
    ]
  },
  {
    path: '',
    component: PageLayoutComponent,
    children: [
      {
        path: 'home',
        loadComponent: () => import('@pages/home/home.component').then(c => c.HomeComponent)
      },
      {
        path: 'profile',
        loadComponent: () => import('@pages/profile/profile.component').then(c => c.ProfileComponent)
      },
      {
        path: '**',
        redirectTo: 'home'
      },
    ]
  },
];

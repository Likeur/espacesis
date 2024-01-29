import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'home',
        title: 'Communauté de développeurs',
        loadComponent: () => import('./pages/home/home.component')
    },
    {
        path:'about',
        title: 'à propos',
        loadComponent: () => import('./pages/about/about.component')
    },
    {
        path:'blog',
        title: 'blog',
        loadComponent: () => import('./pages/about/about.component')
    },
    {
        path:'',
        redirectTo: 'home',
        pathMatch: 'full'
    }
];

import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'home',
        title: 'Communauté de développeurs',
        loadComponent: () => import('./pages/home/home.component')
    },
    {
        path:'team',
        title: 'team',
        loadComponent: () => import('./pages/team/team.component')
    },
    {
        path:'',
        redirectTo: 'home',
        pathMatch: 'full'
    }
];

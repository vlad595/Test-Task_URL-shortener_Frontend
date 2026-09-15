import { Routes } from '@angular/router';
import { Login } from './features/auth/components/login/login';
import { Register } from './features/auth/components/register/register';
import { DashboardPage } from './features/dashboard/components/dashboard-page/dashboard-page';

export const routes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: "full"},
    { path: 'login', component: Login},
    { path: 'reg', component: Register},
    { path: 'dashboard', component: DashboardPage},
    { path: '**', redirectTo: 'dashboard'}
];

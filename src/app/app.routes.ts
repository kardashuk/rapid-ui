import {Routes, RouterModule} from '@angular/router';

import {LoginComponent} from './login/login.component';
import {DashboardComponent} from './dashboard/dashboard.component';

import {AuthGuardService as AuthGuard} from './auth-guard.service';
import {GuestGuardService as GuestGuard} from './guest-guard.service';

const appRoutes: Routes = [
    {
        path: '',
        canActivate: [GuestGuard],
        component: LoginComponent
    },
    {
        path: 'dashboard',
        canActivate: [AuthGuard],
        component: DashboardComponent
    }
];

export const AppRoutes = RouterModule.forRoot(appRoutes);
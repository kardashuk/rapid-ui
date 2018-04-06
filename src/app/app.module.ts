import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app/app.component';
import {AngularFireModule} from 'angularfire2';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {FormsModule} from '@angular/forms';

import {environment} from '../environments/environment';
import {AppRoutes} from './app.routes';
import {AuthService} from './auth.service';
import {LoginComponent} from './login/login.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AuthGuardService as AuthGuard} from './auth-guard.service';
import {GuestGuardService as GuestGuard} from './guest-guard.service';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        DashboardComponent
    ],
    imports: [
        BrowserModule,
        AppRoutes,
        FormsModule,
        AngularFireModule.initializeApp(environment.firebase, 'angular-auth-firebase'),
        AngularFirestoreModule,
        AngularFireAuthModule
    ],
    providers: [AuthService, AuthGuard, GuestGuard],
    bootstrap: [AppComponent]
})
export class AppModule {
}

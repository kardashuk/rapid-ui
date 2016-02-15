import {Component} from 'angular2/core';
import {App} from './my-app.ts';
import {iUser} from '../model/user.ts';

import {UserRegister}   from './user-register.ts';


@Component({
    selector: 'user-login',
    templateUrl: 'views/user/login.html',
    styleUrls: [ './styles/user-auth.scss' ],
    directives: [UserRegister]
})
export class UserLogin {
    User: iUser = <iUser>{};
    Auth = { step: 'login'};
    onSignUp(){
        this.Auth.step = 'auth';
    }
}

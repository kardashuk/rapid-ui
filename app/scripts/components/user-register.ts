import {Component} from 'angular2/core';
import {iUser} from '../model/user.ts';

import {uiFormField} 	from './form-field.ts';

@Component({
    selector: 'user-register',
    templateUrl: 'views/user/register.html',
    styleUrls: [ './styles/user-auth.scss' ],
    inputs: ['Auth','User'],
    directives: [uiFormField]
})
export class UserRegister {
    User: iUser;
    onSignIn(){
        this.Auth.step = 'login';
    }
}


import {Component} from 'angular2/core';
import {iUser} from '../model/user.ts';


@Component({
    selector: 'user-register',
    templateUrl: 'views/user/register.html',
    styleUrls: [ './styles/user-auth.scss' ],
    inputs: ['Auth','User']
})
export class UserRegister {
    User: iUser;
}

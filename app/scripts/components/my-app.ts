import {Component} 		from 'angular2/core';

import {User} 			from '../model/user.ts';

import {UserLogin}      from './user-login.ts';





@Component({
	selector: 'my-app',
	templateUrl: 'views/app.html',
    styleUrls: [ './styles/app.scss' ],
	directives: [UserLogin]
})
export class App {
	public currentUser: iUser;
}
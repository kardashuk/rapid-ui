import {Component} from 'angular2/core';


export interface iUser{
    id: string;
    firstName: string;
    lastName: string;
    username: string;
    password: string;
    phone: string;
    termsAccepted: boolean;
}

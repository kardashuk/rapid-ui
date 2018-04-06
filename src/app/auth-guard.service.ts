import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { Observable } from "rxjs/Rx";
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import {AngularFireAuth} from "angularfire2/auth";

@Injectable()
export class AuthGuardService implements CanActivate {

    constructor(private router: Router,
                private _firebaseAuth: AngularFireAuth,) { }


    canActivate(): Observable<boolean> {
        return Observable.from(this._firebaseAuth.authState)
            .take(1)
            .map(authenticated => {
                if (!authenticated){
                    this.router.navigate([ '/' ]);
                    return false;
                }else{
                    return true;
                }
            })
    }
}
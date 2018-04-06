import {Component, OnInit} from '@angular/core';
import {AngularFirestore} from 'angularfire2/firestore';
import {Observable} from 'rxjs/Observable';
import {AuthService} from '../auth.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

    items: Observable<any[]>;

    constructor(public authService: AuthService, db: AngularFirestore) {
        this.items = db.collection('home').valueChanges();
    }

    logout() {
        this.authService.logout();
    }

    ngOnInit() {
    }
}
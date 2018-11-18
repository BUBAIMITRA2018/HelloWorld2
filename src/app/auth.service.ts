import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';
import { Observable } from 'rxjs/observable';
import { ActivatedRoute } from '@angular/router';
import { AppUser } from './models/app-user';
import { UserService } from './user.service';
import 'rxjs/add/operator/map';
import { of } from 'rxjs/observable/of'




@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public user$: Observable<firebase.User>;




  constructor(private userservice: UserService, private afAuth: AngularFireAuth, private route: ActivatedRoute) {

   this.user$ = this.afAuth.authState;

   }


   get appuser$(): Observable<AppUser> {
    return this.user$.switchMap(user => {
        if (user) { return this.userservice.get(user.uid).valueChanges(); }
          return of(null);
      });
    }

   login() {
         const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
         localStorage.setItem('returnUrl', returnUrl);
         this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
           }

  logout() {
    this.afAuth.auth.signOut();
     }



}

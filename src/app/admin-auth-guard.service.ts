import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from './auth.service';
import { UserService } from './user.service';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';


@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuardService implements CanActivate {

  constructor(private auth: AuthService, private userservice: UserService) { }
canActivate(): Observable<boolean> {

  return this.auth.appuser$.map(appUser => appUser.isAdmin);
 }

}

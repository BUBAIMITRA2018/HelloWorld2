import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from 'app/auth.service';
import { AppUser } from 'app/models/app-user';
import { Observable } from 'rxjs';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit {

  appuser: AppUser;

   constructor(private auth: AuthService) {

    auth.appuser$.subscribe(appUser => this.appuser = appUser);
  }

  logout() {
    this.auth.logout();
  }

  ngOnInit() {
  }

}

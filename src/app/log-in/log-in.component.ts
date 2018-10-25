import { Component, OnInit } from '@angular/core';

import * as firebase from 'firebase';

import { AngularFireAuth} from '@angular/fire/auth';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  constructor(private afAuth:AngularFireAuth) { 


  }

  ngOnInit() {
  }

  login(){

    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());


  }

}

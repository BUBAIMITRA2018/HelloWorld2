import { Component, OnInit } from '@angular/core';

import { AuthService } from 'app/auth.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  constructor(private Auth:AuthService) { 

  }

  ngOnInit() {
  }

  login(){

   this.Auth.login();
  }

}

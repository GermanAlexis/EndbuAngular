import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../Service/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html'
})
export class NavBarComponent implements OnInit {

  constructor( private auth: AuthService) { }

  ngOnInit() {
    this.auth.localAuthSetup();
    this.auth.handleAuthCallback();
  }
   login() {
     this.auth.login();
   }

   logout() {
     this.auth.logout();
   }

}

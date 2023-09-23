import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  loggedInUser: User;

  constructor(private authService: AuthService, private router: Router) { }

  isLoggedIn() {
    debugger;
    let exists = this.authService.isUserLoggedIn();
    if(exists) {
      this.loggedInUser =  this.authService.getLoggedInUser();
      return true;
    }
    return false;
  }

  onLogout() {
    this.authService.logoutUser();
    this.router.navigate(["user-login"]);
  }
}

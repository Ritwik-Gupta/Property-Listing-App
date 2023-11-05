import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  confirmLogin(email: string, password:string) {
    let Users: Array<User> = JSON.parse(localStorage.getItem("Users"));
    let selectedUser = null;

    if(Users) {
      selectedUser = Users.find(x =>
        x.email === email &&
        x.password === password
      )
    }

    if(selectedUser) {
      //set a local storage token, when the user is authenticated successfully
      localStorage.setItem("token", JSON.stringify(selectedUser));
      return true;
    }
    return false;
  }

  isUserLoggedIn() {
    let exists  = localStorage.getItem("token");
    if(exists) {
      return true;
    }
    else {
      return false;
    }
  }

  getLoggedInUser() {
    let loggedInUser = JSON.parse(localStorage.getItem("token"));
    return loggedInUser;
  }

  logoutUser(): void {
    localStorage.removeItem("token")
1111  }

}

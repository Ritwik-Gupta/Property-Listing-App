import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

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
      localStorage.setItem("token", email);
      return true;
    }
    return false;
  }

  isLoggedIn() {
    debugger;
    let exists  = localStorage.getItem("token");
    if(exists) {
      return true;
    }
    else {
      return false;
    }
  }
}

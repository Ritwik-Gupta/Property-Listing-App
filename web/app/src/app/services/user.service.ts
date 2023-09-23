import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: any;
  loggedInUser: User;

  constructor(private authService: AuthService) { }

  saveUser(user: User) {
    this.users = JSON.parse(localStorage.getItem('Users'));

    if(this.users) {
      this.users = JSON.stringify([...this.users, user])
    }
    else {
      this.users = JSON.stringify([user]);
    }

    localStorage.setItem("Users", this.users);
  }

}

import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: any;
  constructor() { }

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

import { Component } from '@angular/core';
import { FormGroup, FormControl, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})

export class UserLoginComponent {

  constructor(private authService: AuthService, private router: Router) { }

  userLoginForm = new FormGroup({
    email: new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  })

  // -------------------------
  // Getter methods for form
  // -------------------------

  get email() {
    return this.userLoginForm.get('email');
  }

  get password() {
    return this.userLoginForm.get('password');
  }

  // -------------------------

  onSubmitLogin() {
    debugger;
    let exists = this.authService.confirmLogin(this.email.value, this.password.value);

    if(exists) {
      console.log("User Authenticated");
      //redirect to login page
      this.router.navigate([""]);
    }
    else {
      console.log("Invalid User");
    }
  }
}

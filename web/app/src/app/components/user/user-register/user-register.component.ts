import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators,
  ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit{

  constructor(private userService: UserService) {}

  private user: User;

  userRegistrationForm: any = new FormGroup({
    fname : new FormControl('', Validators.required),
    lname : new FormControl('', Validators.required),
    email : new FormControl('', [Validators.required, Validators.email]),
    password : new FormControl('', [Validators.required,Validators.minLength(8), Validators.maxLength(20), this.passwordMatchingValidator()]),
    confirmPassword : new FormControl('', [Validators.required, this.passwordMatchingValidator()])
  })

  passwordMatchingValidator(): ValidatorFn    {
    return (control: AbstractControl): ValidationErrors => {
       const value = control.value;

      if(value == "") { return null; }

      const passValid = this.password.value === this.confirmPassword.value || this.confirmPassword.value == "";

      if(!passValid){
        return {notmatched: true};
      }
      else {
        return null;
      }
    }
  }

  ngOnInit(): void {

  }

  // ---------------------------------
  // Getter methods for form controls
  // ---------------------------------

  get fname() {
    return this.userRegistrationForm.get('fname') as FormControl;
  }

  get lname() {
    return this.userRegistrationForm.get('lname') as FormControl;
  }

  get email() {
    return this.userRegistrationForm.get('email') as FormControl;
  }

  get password() {
    return this.userRegistrationForm.get('password') as FormControl;
  }

  get confirmPassword() {
    return this.userRegistrationForm.get('confirmPassword') as FormControl;
  }

  // ----------------------------------------

  onSubmit(): void {
    debugger;
    this.user = this.userRegistrationForm.value;
    this.userService.saveUser(this.user);
    this.userRegistrationForm.reset();
  }

}

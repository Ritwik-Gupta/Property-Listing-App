import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators,
  ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent {

  userRegistrationForm: any = new FormGroup({
    fname : new FormControl('', Validators.required),
    lname : new FormControl('', Validators.required),
    email : new FormControl('', [Validators.required, Validators.email]),
    password : new FormControl('', [Validators.required,Validators.minLength(8), Validators.maxLength(20)]),
    confirmpassword : new FormControl('', [Validators.required,Validators.minLength(8), Validators.maxLength(20),
    this.passwordMatchingValidator()])
  })


  passwordMatchingValidator(): ValidatorFn    {
    return (control: AbstractControl): ValidationErrors => {
      debugger;
      const value = control.value;

      if(value == "") { return null; }

      const passValid = this.userRegistrationForm.get('password').value === this.userRegistrationForm.get('confirmpassword').value;

      if(!passValid){
        return {notmatched: true};
      }
      else {
        return null;
      }
    }
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
    return this.userRegistrationForm.get('confirmpassword') as FormControl;
  }

  // ----------------------------------------

  onSubmit(): void {
    console.log(this.userRegistrationForm);
  }

  // onPasswordChange(): void {
  //   console.log(this.password);
  // }

  // onEmailChange(): void {
  //   console.log(this.email);
  // }

  onCheckStatus(): void {
    console.log(this.password);
    console.log(this.confirmPassword);
  }
}

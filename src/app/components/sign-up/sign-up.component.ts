import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { EmailService } from '../../services/email.service';
import { IuserEmail } from '../../models/iuser-email';

@Component({
  selector: 'app-sign-up',
  standalone: false,
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css',
})
export class SignUpComponent {
  user: IuserEmail = {} as IuserEmail;
  constructor(private _router: Router, private _userEmail: EmailService) {}
  SignUpForm = new FormGroup(
    {
      username: new FormControl('', [Validators.required]),
      email: new FormControl('', [
        Validators.required,
        Validators.email,
        Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
      confirmPassword: new FormControl('', [Validators.required]),
    },
    SignUpComponent.passwordsMatchValidator
  );

  static passwordsMatchValidator(
    form: AbstractControl
  ): { [key: string]: any } | null {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { passwordMismatch: true };
  }

  SignUp() {
    this.user.Email = this.SignUpForm.get('email')?.value ?? '';
    this.user.UserName = this.SignUpForm.get('username')?.value ?? '';
    this.user.Password = this.SignUpForm.get('password')?.value ?? '';

    this._userEmail.addUser(this.user);
    this._router.navigateByUrl('home');
  }
}

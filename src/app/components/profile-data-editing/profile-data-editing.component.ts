import { Component, OnInit } from '@angular/core';
import { IuserEmail } from '../../models/iuser-email';
import { ActivatedRoute, Router } from '@angular/router';
import { EmailService } from '../../services/email.service';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { flush } from '@angular/core/testing';
import { Location } from '@angular/common';

@Component({
  selector: 'app-profile-data-editing',
  standalone: false,
  templateUrl: './profile-data-editing.component.html',
  styleUrl: './profile-data-editing.component.css',
})
export class ProfileDataEditingComponent implements OnInit {
  editName: boolean = false;
  editPassword: boolean = false;
  editImage: boolean = false;

  user: IuserEmail = {} as IuserEmail;
  constructor(
    private _activateRoute: ActivatedRoute,
    private _email: EmailService,
    private _location: Location
  ) {}
  ImageForm = new FormGroup(
    {
      image: new FormControl(''),
    },
    this.passwordsMatchValidator
  );
  EditForm = new FormGroup(
    {
      username: new FormControl('', [Validators.required]),

      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
      confirmPassword: new FormControl('', [Validators.required]),
    },
    this.passwordsMatchValidator
  );
  passwordsMatchValidator(
    form: AbstractControl
  ): { [key: string]: any } | null {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { passwordMismatch: true };
  }

  ngOnInit(): void {
    this.user.Email =
      this._activateRoute.snapshot.paramMap.get('UserEmail') ?? '';

    this.user =
      this._email.Users.find((us) => us.Email === this.user.Email) ??
      ({} as IuserEmail);
  }

  Edit() {
    if (this.editName && !this.editPassword) {
      this.user.UserName = this.EditForm.controls.username.value ?? '';
      this.editName = false;
    } else if (this.editPassword && !this.editName) {
      this.user.Password = this.EditForm.controls.password.value ?? '';
      this.editPassword = false;
    } else {
      this.user.UserName = this.EditForm.controls.username.value ?? '';
      this.user.Password = this.EditForm.controls.password.value ?? '';
      this.editPassword = false;
      this.editName = false;
    }

    this.EditForm.reset();
  }
  SavingImage() {
    this.user.UserImage = this.ImageForm.controls.image.value ?? '';

    this.editImage = false;
    this.ImageForm.reset();
  }
  ClearImage() {
    this.user.UserImage = 'assets/blank-profile-picture-973460_640.webp';
    this.editImage = false;
  }
  goBack() {
    this._location.back();
  }
}

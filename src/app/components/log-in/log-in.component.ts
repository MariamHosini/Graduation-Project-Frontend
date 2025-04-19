import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { RouterLink } from '@angular/router';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { EmailService } from '../../services/email.service';
import { concatWith } from 'rxjs';
@Component({
  selector: 'app-log-in',
  standalone: false,
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.css',
})
export class LogInComponent {
  email = '';
  userName = '';
  role = '';
  userId: string | null = null;
  image: string= '';
  constructor(private _router: Router , private _auth : AuthService) {}
  LoginForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
     
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });
  clicked() {

    
    const credentials = {userName : this.LoginForm.controls.email.value , password : this.LoginForm.controls.password.value }
    this._auth.login(credentials).subscribe({
      next: (res) => {
        const decoded = this._auth.decodeToken(res.token);
        this._auth.token = res.token;
        this.userId = decoded.userId;
        this.userName = decoded.name;
        this.email = '';
        this.role = '';
        this._auth.setLoggedIn(true);
        if(decoded.roles)
        {
          this.role = decoded.roles[0];
        }
        console.log('User ID from token:', this.userId);
        console.log('User Name from token:', this.userName);
        console.log('Roles from token:',  this.role);
        if(this.userId )
        {
          this._auth.getUserData(Number(this.userId)).subscribe({next:(res)=> {console.log("res is",res);
            this.email = res.email;
            this.image = res.profileImageUrl
          }});
        }
        this._auth.loggedUser = {userName : this.userName ,email : this.email , userImage : this.image , password : this.LoginForm.controls.password.value || '' }
        this._auth.loggedUserId = Number(this.userId);
        if (this.role == 'MANAGER')
        {
          console.log("admin");
          this._router.navigateByUrl(`Admin/${this.userId}`);
        }
      
      else
      {
        console.log("user");
        this._router.navigateByUrl(`UserProfile/${this.userId}`); 

      }
      },
      error: (err) => {
        console.error('Login failed:', err);
      },
    });
  }
}

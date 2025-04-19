import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-footer',
  standalone: false,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  userName = '';
  role = '';
  userId: string | null = null;
  constructor(private _router:Router , private _auth : AuthService){}
  LoginForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
     
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });
  Clicked(arg0: number) {
    console.log("clicked");
    this._router.navigateByUrl(`recipesShow/${arg0}`);
  }
  sign() {

    const credentials = {userName : this.LoginForm.controls.email.value , password : this.LoginForm.controls.password.value }
    this._auth.login(credentials).subscribe({
      next: (res) => {
        const decoded = this._auth.decodeToken(res.token);
        this.userId = decoded.userId;
        this.userName = decoded.name;
        this.role = '';
        if(decoded.roles)
        {
          this.role = decoded.roles[0];
        }
        console.log('User ID from token:', this.userId);
        console.log('User Name from token:', this.userName);
        console.log('Roles from token:',  this.role);
        
        this._auth.loggedUser!.userName = this.userName;
       
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

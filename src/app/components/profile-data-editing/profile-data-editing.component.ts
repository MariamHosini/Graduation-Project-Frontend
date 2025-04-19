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
import { IAuthor } from '../../models/iauthor';
import { IuserData } from '../../models/iuser-data';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-profile-data-editing',
  standalone: false,
  templateUrl: './profile-data-editing.component.html',
  styleUrl: './profile-data-editing.component.css',
})
export class ProfileDataEditingComponent implements OnInit {
  editName: boolean = false;
  userid:number=0;

  editImage: boolean = false;
  user: IuserData = {} as IuserData;
  constructor(
    private _activateRoute: ActivatedRoute,
    private _email: EmailService,
    private _location: Location,
    private _auth:AuthService
  ) {}
  ImageForm = new FormGroup(
    {
      image: new FormControl(''),
    },
  
  );
  EditForm = new FormGroup(
    {
      username: new FormControl('', [Validators.required]),

    
    },
   
  );
 
  ngOnInit(): void {
    this.userid =
     Number( this._activateRoute.snapshot.paramMap.get('UserId')) ?? 0;
     this._auth.getUserData(this.userid).subscribe({
      next:(res)=>{
        this.user=res;
        this.user.profileImageUrl="assets/blank-profile-picture-973460_640.webp"
      }
     });

   
  }

  Edit() {
    if (this.editName ) {
      this.user.userName = this.EditForm.controls.username.value ?? '';
      this.editName = false;
    }else {
      this.user.userName = this.EditForm.controls.username.value ?? '';
     
    
      this.editName = false;
    }

    this.EditForm.reset();
  }
  SavingImage() {
    this.user.profileImageUrl = this.ImageForm.controls.image.value ?? '';

    this.editImage = false;
    this.ImageForm.reset();
  }
  ClearImage() {
    this.user.profileImageUrl = 'assets/blank-profile-picture-973460_640.webp';
    this.editImage = false;
  }
  goBack() {
    this._location.back();
  }
}

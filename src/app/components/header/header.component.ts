import { Component, ElementRef, OnInit, ViewChild, viewChild } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  @ViewChild('navToggeler') btn!: ElementRef;
  isloged : boolean = false;
  constructor(private auth : AuthService,
    private _router:Router
  ){}
  ngOnInit() {
    this.auth.logged$.subscribe(value => {
      this.isloged = value;
    });
    console.log('Is user logged in:', this.auth.loggedUser);
  };
  logout() {
  this.isloged = false ;
  this.auth.loggedUser =null;
  this.auth.loggedUserId = null;
  }
  GoToProfile(){
    this._router.navigateByUrl( `UserProfile/${this.auth.loggedUserId}`);
    
  }
  
  }

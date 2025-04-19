import { Component } from '@angular/core';
import { IRecipeDetails } from '../../models/irecipe-details';
import { TopRatedService } from '../../services/top-rated.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IuserEmail } from '../../models/iuser-email';
import { EmailService } from '../../services/email.service';
import { AuthService } from '../../services/auth.service';
import { IuserData } from '../../models/iuser-data';
import { Favrecipes } from '../../models/favrecipes';
import { APIRecipeService } from '../../services/apirecipe.service';

@Component({
  selector: 'app-user-profile',
  standalone: false,
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css',
})
export class UserProfileComponent {
  UserId:number=0;
  edit: boolean = false;
  fav: Favrecipes[] = [] as Favrecipes[];
user:IuserData={} as IuserData;
  constructor(
    private _TopRatedService: TopRatedService,
    private _router: Router,
    private _email: EmailService,
    private _activatedRouter:ActivatedRoute,
    private _auth:AuthService,
    private _apirecipes:APIRecipeService
  ) {}

  ngOnInit() {
  
   
   this.UserId= Number(this._activatedRouter.snapshot.paramMap.get('UserId'))??0;
   this._auth.getUserData(this.UserId).subscribe(
    {
      next:(res)=>{this.user=res;
        if(!this.user.profileImageUrl){
          this.user.profileImageUrl="assets/blank-profile-picture-973460_640.webp"
        }
    
      }
    }
   );
   if(this.UserId)
   {
    console.log('userod',this.UserId);
     this._apirecipes.GetFavritRecipes(this.UserId!).subscribe({
      next: (res) => {
        this.fav = res;
        console.log('Favorite Recipes:', res);
      },
      error: (err) => {
        console.error('Error fetching favorites:', err);
      }
    });
    
   }

  }
  getRecipe(receipeId: number) {
    this._router.navigateByUrl(`oneRecipeShow/${receipeId}`);
  }
  EditData() {
    this._router.navigateByUrl(`EditProfile/${this.UserId}`);
  }
}

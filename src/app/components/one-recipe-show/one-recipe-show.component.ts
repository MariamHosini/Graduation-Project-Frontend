import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IRecipeDetails } from '../../models/irecipe-details';
import { TopRatedService } from '../../services/top-rated.service';
import { APIRecipeService } from '../../services/apirecipe.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-one-recipe-show',
  standalone: false,
  templateUrl: './one-recipe-show.component.html',
  styleUrl: './one-recipe-show.component.css',
})
export class OneRecipeShowComponent implements OnInit {
  recipe: IRecipeDetails = {} as IRecipeDetails;
  
  recipeID!: number;
clicked: boolean = false;
  constructor(
    private _ActivatedRoute: ActivatedRoute,
    private _topRatedServices: APIRecipeService, 
    private _auth:AuthService,
    private _router:Router
  ) {}
  ngOnInit() {
    this.recipeID = parseInt(
      this._ActivatedRoute.snapshot.paramMap.get('recipeID') ?? '0'
    );
      this._topRatedServices.GetRecipeById(this.recipeID).subscribe(
    {
        next : (response) =>
        {
          this.recipe = response;
          console.log('in one',this.recipe);
          console.log('in one',this.recipeID);
        }
    })
  }

  isFilled = false; // By default, the heart is hollow
  isSaved = false;
  toggleHeart() {
    this.isFilled = !this.isFilled; // Toggle the heart's state (filled or hollow)
  }
  toggleBookmark() {
    this.isSaved = !this.isSaved;
    
   
      if(this._auth.loggedUserId && this.isSaved==true)
      {
        console.log("in reqest",{recipeID : this.recipe.recipeID , userID : this._auth.loggedUserId});
        this._topRatedServices.AddFavorite({recipeID : this.recipe.recipeID , userID : this._auth.loggedUserId}).subscribe({
          next:(res)=>console.log(res),
          error:(err)=>console.log(err)
          
        });

      }
     else if(this._auth.loggedUserId && this.isSaved==false)
        {
          this._topRatedServices.deleteFavorite({recipeID : this.recipe.recipeID , userID : this._auth.loggedUserId}).subscribe({
            next:(res)=>console.log(res),
            error:(err)=>console.log(err)
            
          });
  
        }
        else{
          this._router.navigateByUrl('Login');
        }
      
    
  }
}

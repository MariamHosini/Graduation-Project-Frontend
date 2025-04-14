import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IRecipeDetails } from '../../models/irecipe-details';
import { TopRatedService } from '../../services/top-rated.service';

@Component({
  selector: 'app-one-recipe-show',
  standalone: false,
  templateUrl: './one-recipe-show.component.html',
  styleUrl: './one-recipe-show.component.css',
})
export class OneRecipeShowComponent implements OnInit {
  recipe: IRecipeDetails = {} as IRecipeDetails;
  recipeID!: number;
  constructor(
    private _ActivatedRoute: ActivatedRoute,
    private _topRatedServices: TopRatedService
  ) {}
  ngOnInit(): void {
    this.recipeID = parseInt(
      this._ActivatedRoute.snapshot.paramMap.get('recipeID') ?? '0'
    );
    const found = this._topRatedServices.mockRecipes.find(
      (recipe) => recipe.RecipeID == this.recipeID
    );
    if (found) {
      this.recipe = found;
    }
  }

  isFilled = false; // By default, the heart is hollow
  isSaved = false;
  toggleHeart() {
    this.isFilled = !this.isFilled; // Toggle the heart's state (filled or hollow)
  }
  toggleBookmark() {
    this.isSaved = !this.isSaved;
  }
}

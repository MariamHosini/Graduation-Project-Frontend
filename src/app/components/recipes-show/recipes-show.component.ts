import { Component, OnInit } from '@angular/core';
import { TopRatedService } from '../../services/top-rated.service';
import { IRecipeDetails } from '../../models/irecipe-details';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-recipes-show',
  standalone: false,
  templateUrl: './recipes-show.component.html',
  styleUrl: './recipes-show.component.css',
})
export class RecipesShowComponent implements OnInit {
  topRated: IRecipeDetails[] = [] as IRecipeDetails[];
  constructor(
    private _TopRatedService: TopRatedService,
    private _router: Router
  ) {}

  ngOnInit() {
    this.topRated = this._TopRatedService.mockRecipes;
  }
  getRecipe(receipeId: number) {
    this._router.navigateByUrl(`oneRecipeShow/${receipeId}`);
  }
}

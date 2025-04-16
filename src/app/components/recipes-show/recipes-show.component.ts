import { Component, OnInit } from '@angular/core';
import { TopRatedService } from '../../services/top-rated.service';
import { IRecipeDetails } from '../../models/irecipe-details';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { APICategoriesService } from '../../services/api-categories.service';
import { APIRecipeService } from '../../services/apirecipe.service';
import { forkJoin } from 'rxjs';
@Component({
  selector: 'app-recipes-show',
  standalone: false,
  templateUrl: './recipes-show.component.html',
  styleUrl: './recipes-show.component.css',
})
export class RecipesShowComponent implements OnInit {
  selectedOptions: any[] = [];
  topRated: IRecipeDetails[] = [] as IRecipeDetails[];
  selectedCategory: number = 0;
  constructor(
    private _TopRatedService: TopRatedService,
    private _router: Router // private _apiCategories: APICategoriesService,
  ) // private _apiRecipes: APIRecipeService
  {}

  ngOnInit() {
    this.topRated = this._TopRatedService.mockRecipes;

    // forkJoin([
    //   this._apiCategories.GetAllCategories(),
    //   this._apiRecipes.GetAllRecipes(),
    // ]).subscribe(([data1, data2]: [any[], any[]]) => {
    //   this.selectedOptions = [
    //     { id: 0, displayName: 'All', description: '' },
    //     ...[...data1, ...data2].map((item) => ({
    //       id: item.RecipeID || item.CategoryID,
    //       displayName: item.Name || item.Title,
    //     })),
    //   ];
    // });
  }
  getRecipe(receipeId: number) {
    this._router.navigateByUrl(`oneRecipeShow/${receipeId}`);
  }
}

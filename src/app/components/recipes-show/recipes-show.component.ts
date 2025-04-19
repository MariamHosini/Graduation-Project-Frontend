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
    private _router: Router,
    private _apiCategories: APICategoriesService,
   private _apiRecipes: APIRecipeService,
   private _activatedRoute : ActivatedRoute
   )
  {}

  ngOnInit() {

    this._activatedRoute.paramMap.subscribe(paramMap => {
      const idparam = paramMap.get('id');
      console.log('Route changed. New id:', idparam);
  
      if (idparam === 'all') {
        this.loadAllRecipes();
      } else if (isFinite(Number(idparam))) {
        this._apiRecipes.GetRecipeByCat(Number(idparam)).subscribe((recipes) => {
          this.topRated = recipes;
          console.log('Recipes for selected category:', recipes);
        });
      }
    });

    this._apiCategories.GetAllCategories().subscribe((categories: any[]) => {
      this.selectedOptions = [
        { id: 0, displayName: 'All', description: '' },
        ...categories.map((category) => ({
          id: category.categoryID,
          displayName: category.name,
        })),
      ];
      console.log(this.selectedOptions);
    });
    
  }
  getRecipe(receipeId: number) {
    this._router.navigateByUrl(`oneRecipeShow/${receipeId}`);
  }
  loadAllRecipes() {
    this._apiRecipes.GetAllRecipes().subscribe({
      next: (response) => {
        this.topRated = response;
        console.dir(this.topRated); // Log the array directly since response is IRecipeDetails[]
       
      },
      error: (err) => {
        console.error('Error fetching top-rated recipes:', err);
        // You can also show a message to the user here
      }
    });
}
onCategorySelected(categoryId: number) {
  if (categoryId === 0) {
    this.loadAllRecipes();
  } else {
    this._apiRecipes.GetRecipeByCat(categoryId).subscribe((recipes) => {
      this.topRated = recipes;
      console.log('Recipes for selected category:', recipes);
    });
  }
}
}
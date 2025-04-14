import { Component, OnInit } from '@angular/core';
import { TopRatedService } from '../../services/top-rated.service';
import { IRecipeDetails } from '../../models/irecipe-details';
import { ICategory } from '../../models/icategory';
import { CategoriesService } from '../../services/categories.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-receipe',
  standalone: false,
  templateUrl: './receipe.component.html',
  styleUrl: './receipe.component.css',
})
export class ReceipeComponent implements OnInit {
  topRated: IRecipeDetails[] = [] as IRecipeDetails[];
  Popularcategories: ICategory[] = [] as ICategory[];
  MealTypecategories: ICategory[] = [] as ICategory[];
  Coursecategories: ICategory[] = [] as ICategory[];

  constructor(
    private _TopRatedService: TopRatedService,
    private _Categories: CategoriesService,
    private _router: Router
  ) {}
  ngOnInit() {
    this.topRated = this._TopRatedService.mockRecipes;
    this.Popularcategories = this._Categories.getByGroup('Popular');
    this.MealTypecategories = this._Categories.getByGroup('MealType');
    this.Coursecategories = this._Categories.getByGroup('Course');
  }

  getRecipe(receipeId: number) {
    this._router.navigateByUrl(`oneRecipeShow/${receipeId}`);
  }
  getRecipesCat(catId: number) {
    this._router.navigateByUrl('home');
  }
  getAllRecipes(recipes: string) {
    this._router.navigateByUrl(`recipesShow/${recipes}`);
  }
}

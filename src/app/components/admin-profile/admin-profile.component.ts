import { Component } from '@angular/core';
import { IRecipeDetails } from '../../models/irecipe-details';
import { IuserEmail } from '../../models/iuser-email';
import { TopRatedService } from '../../services/top-rated.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { EmailService } from '../../services/email.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { APIIngredientService } from '../../services/api-ingredient.service';
import { IIngredient } from '../../models/iingredient';
import { APICategoriesService } from '../../services/api-categories.service';
import { ICategory } from '../../models/icategory';
import { ICategoryToAdd } from '../../models/icategory-to-add';
import { RecipeCreated } from '../../models/recipe-created';
import { IAuthor } from '../../models/iauthor';
import { IRecipeIngredieent } from '../../models/irecipe-ingredieent';
import { APIRecipeService } from '../../services/apirecipe.service';
import { IIngredientPost } from '../../models/iingredientpost';
import { AuthService } from '../../services/auth.service';
import { IuserData } from '../../models/iuser-data';

@Component({
  selector: 'app-admin-profile',
  standalone: false,
  templateUrl: './admin-profile.component.html',
  styleUrl: './admin-profile.component.css',
})
export class AdminProfileComponent {
  selectedOptions: any[] = [];
  selectedIngredient: number = 0;
  edit: boolean = false;
  user: IuserData = {} as IuserData;
  Recipeingredients: IRecipeIngredieent[] = [] as IRecipeIngredieent[];
  OneRecipeingredient: IRecipeIngredieent = {} as IRecipeIngredieent;
UserId:number=0;
  ingredient: IIngredientPost = {
    
    name: '',
   
    carbs: 0,
    caloriesPer100g: 0,
    fats: 0,
    
    protein: 0,
  };
  category: ICategoryToAdd = {
    name: '',
    categoryID: 0,
  };
  recipe: RecipeCreated = { 
    title: '',
  
  instructions: '',
  
  prepTime: 0,
  
  description: '',
  
  cookingTime: 0,
  
  cuisineType: '',
  image: '',
  
  author: {userName : '',
    id: '8',
  },

  categoryNames: [],

  ingredients: [],

  } ;
  AddIngredient: boolean = false;
  AddRecipe: boolean = false;
  AddCategory: boolean = false;
  constructor(
    private _TopRatedService: TopRatedService,
    private _auth:AuthService,
    private _router: Router,
    private _email: EmailService,
    private _apiIngredientService: APIIngredientService,
    private _apiCategory: APICategoriesService,
    private _apiRecipess: APIRecipeService,
    private _activatedRoute:ActivatedRoute
  ) {}
  //ingredient form
  ingredientForm = new FormGroup({
    name: new FormControl('', Validators.required),
   
    calories: new FormControl('', [
      Validators.required,
      Validators.pattern('^[0-9]+$'),
    ]),
    protein: new FormControl('', [
      Validators.required,
      Validators.pattern('^[0-9]+$'),
    ]),
  
    fats: new FormControl('', [
      Validators.required,
      Validators.pattern('^[0-9]+$'),
    ]),
    carbs: new FormControl('', [
      Validators.required,
      Validators.pattern('^[0-9]+$'),
    ]),
  });
  //Category form
  categoryForm = new FormGroup({
    name: new FormControl('', Validators.required),
  });
  //Recipe form
  recipeForm = new FormGroup({
    image: new FormControl('', Validators.required), //done
    title: new FormControl('', Validators.required), //done
    instructions: new FormControl('', Validators.required), //done
    prepTime: new FormControl('', [
      Validators.required,
      Validators.pattern('^[0-9]+$'),
    ]), //done
    description: new FormControl('', Validators.required), //done
    cookingtime: new FormControl('', [
      Validators.required,
      Validators.pattern('^[0-9]+$'),
    ]), //done
    CuisineType: new FormControl('', Validators.required), //done
    author: new FormControl('', Validators.required), //done
    categories: new FormControl('', Validators.required), //done
    ingredient_name: new FormControl(''),
    ingredient_quantity: new FormControl('', [
      Validators.required,
      Validators.pattern('^[0-9]+$'),
    ]),
    ingredient_unit: new FormControl('', Validators.required),
  });
  ngOnInit() {
    this.UserId= Number(this._activatedRoute.snapshot.paramMap.get('AdminID'))??0;
    this._auth.getUserData(this.UserId).subscribe(
     {
       next:(res)=>{this.user=res;
         if(!this.user.profileImageUrl){
           this.user.profileImageUrl="assets/blank-profile-picture-973460_640.webp"
         }
     
       }
     }
    );
   
    this._apiIngredientService.GetAllIngredients().subscribe((data: any[]) => {
      this.selectedOptions = [
        ...data.map((item) => ({
          IngredientID: item.ingredientID,
          IngredientName: item.ingredientName,
        })),
      ];
      
    });
    
  }

  EditData() {
    this._router.navigateByUrl(`EditProfile/${this.UserId}`);
  }

  IngredientAdded() {
    this.ingredient.name =
      this.ingredientForm.controls.name.value ?? '';
  
    
    this.ingredient.fats = Number(this.ingredientForm.controls.fats.value) || 0;
  
    this.ingredient.carbs =
      Number(this.ingredientForm.controls.carbs.value) || 0;
    this.ingredient.caloriesPer100g =
      Number(this.ingredientForm.controls.calories.value) || 0;
    this.ingredient.protein =
      Number(this.ingredientForm.controls.protein.value) || 0;
    this.ingredientForm.reset();
    this.AddIngredient = false;

    this._apiIngredientService.AddIngredient(this.ingredient).subscribe({
      next: (res) => console.log('Ingredient Added Succefully'),
      error: (err) => console.log('Error ocuured: ', err),
    });
  }
  CategoryAdded() {
    this.category.name = this.categoryForm.controls.name.value ?? '';
    this._apiCategory.AddCategory(this.category).subscribe({
      next: (res) => console.log('Category Added Succefully'),
      error: (err) => console.log('ERROR ocuured: ', err),
    });
    this.categoryForm.reset();
    this.AddCategory = false;
  }

  addReccipeCategory() {
    this.recipeForm.get('categories')?.clearValidators();
    this.recipe.categoryNames.push(
      this.recipeForm.controls.categories.value ?? ''
    );
    this.recipeForm.get('categories')?.setValue('');
  }
  addReccipeIngredient() {
    let ingredientId = 0;
    let ingredientQuantity = 0;
    let ingredientUnit = '';
    console.log(this.selectedIngredient);
    this._apiIngredientService
      .GetIngredientById(this.selectedIngredient)
      .subscribe({
        next: (res) =>{ (this.OneRecipeingredient.ingredientID = res.ingredientID , this.OneRecipeingredient.ingredientName = res.ingredientName);console.log(this.OneRecipeingredient) ;console.log(res);this.Recipeingredients.push(this.OneRecipeingredient); }
        
      });
      
    ingredientQuantity =
      Number(this.recipeForm.controls.ingredient_quantity.value) || 0;
    ingredientUnit = this.recipeForm.controls.ingredient_unit.value ?? '';
    
    

    
    
    this.recipeForm.get('ingredient_quantity')?.setValue('');
    this.recipeForm.get('ingredient_unit')?.setValue('');
    this.recipeForm.get('ingredient_unit')?.clearValidators();
    this.recipeForm.get('ingredient_quantity')?.clearValidators();
  }
  recipeAdded() {
    this.recipe.image = this.recipeForm.controls.image.value ?? '';
    this.recipe.title = this.recipeForm.controls.title.value ?? '';
    this.recipe.instructions =
      this.recipeForm.controls.instructions.value ?? '';
    this.recipe.prepTime = Number(this.recipeForm.controls.prepTime.value) ?? 0;
    this.recipe.description = this.recipeForm.controls.description.value ?? '';
    this.recipe.cookingTime =
      Number(this.recipeForm.controls.cookingtime.value) ?? 0;
    this.recipe.cuisineType = this.recipeForm.controls.CuisineType.value ?? '';
    this.recipe.author.userName = this.recipeForm.controls.author.value ?? '';
    this.recipe.author.id = '8';
    this.recipe.ingredients = this.Recipeingredients;
    console.log(this.recipe);
    this._apiRecipess.AddRecipe(this.recipe).subscribe({
      next: (res) => console.log('Added recipes'),
      error: (err) => console.log(`Error recipes : ${err}`),
    });
    this.recipeForm.reset();
    this.AddRecipe = false;
  }
}

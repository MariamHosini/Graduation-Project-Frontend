import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IRecipeDetails } from '../models/irecipe-details';
import { environment } from '../../environments/environment.development';
import { RecipeCreated } from '../models/recipe-created';
import { Favrecipes } from '../models/favrecipes';

@Injectable({
  providedIn: 'root',
})
export class APIRecipeService {
  constructor(private _httpClient: HttpClient) {}

  GetAllRecipes(): Observable<IRecipeDetails[]> {
    return this._httpClient.get<IRecipeDetails[]>(
      `${environment.baseURL}/api/recipe`
    );
  }
  GetFavritRecipes(id:number): Observable<Favrecipes[]> {
    return this._httpClient.get<{ data: Favrecipes[] }>(
      `${environment.baseURL}/api/Recipe/favoriteRecipesUser/${id}`
     ) .pipe(map((response: { data: any; }) => response.data));
    
  }

  GetRecipeById(id: number): Observable<IRecipeDetails> {
    return this._httpClient.get<IRecipeDetails>(
      `${environment.baseURL}/api/Recipe/${id}`
    );
  }

  GetRecipeByTitle(title: string): Observable<IRecipeDetails> {
    return this._httpClient.get<IRecipeDetails>(
      `${environment.baseURL}/api/recipe/title/${title}`
    );
  }

  GetRecipeByCat(categoryId: number): Observable<IRecipeDetails[]> {
    return this._httpClient.get<IRecipeDetails[]>(
      `${environment.baseURL}/api/recipe/category/${categoryId}`
    );
  }
  AddRecipe(RecipeToAdd: RecipeCreated) {
    return this._httpClient.post(
      `${environment.baseURL}/api/recipe`,
      RecipeToAdd
    );
  }
  AddFavorite(favorite:{recipeID:number,userID:number}) {
    console.log("in rend",favorite);
    return this._httpClient.post(
      `${environment.baseURL}/api/Recipe/favorite`,favorite
    );
  }
  deleteFavorite(favorite:{recipeID:number,userID:number}) {
    return this._httpClient.delete(
      `${environment.baseURL}/api/Recipe/favorite/${favorite.userID}/${favorite.recipeID}`
    );
  }


  EditRecipe(RecipeToEdit: IRecipeDetails) {
    return this._httpClient.put(
      `${environment.baseURL}/api/recipe`,
      RecipeToEdit
    );
  }

  DeleteCategory(RecipeId: IRecipeDetails) {
    return this._httpClient.delete(`${environment.baseURL}/api/recipe`, {
      body: RecipeId,
    });
  }

  GetTopRatedRecipes(): Observable<IRecipeDetails[]> {
    return this._httpClient
      .get<{ data: IRecipeDetails[] }>(`${environment.baseURL}/api/Rating/top`)
      .pipe(map((response: { data: any; }) => response.data));
  }

  ClickOnSave(saved : boolean,userid : number , recipeid : number )
  {

    const body = 
    {
      recipeID : recipeid,
      userID : userid  
    }
        if(saved)
        {
          return this._httpClient.post(`${environment.baseURL}/api/recipe/favorite`, body)
        }
        else
        {
          return this._httpClient.delete(`${environment.baseURL}/api/recipe/${userid}/${recipeid}`);

        }
  }
}

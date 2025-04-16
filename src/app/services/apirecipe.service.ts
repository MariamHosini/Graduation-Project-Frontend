import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IRecipeDetails } from '../models/irecipe-details';
import { environment } from '../../environments/environment.development';

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

  GetRecipeById(id: number): Observable<IRecipeDetails> {
    return this._httpClient.get<IRecipeDetails>(
      `${environment.baseURL}/api/recipe?id=${id}`
    );
  }

  GetRecipeByTitle(title: string): Observable<IRecipeDetails> {
    return this._httpClient.get<IRecipeDetails>(
      `${environment.baseURL}/api/recipe/title/${title}`
    );
  }

  GetRecipeByCat(categoryId: number): Observable<IRecipeDetails> {
    return this._httpClient.get<IRecipeDetails>(
      `${environment.baseURL}/api/recipe/category/${categoryId}`
    );
  }
  AddRecipe(RecipeToAdd: IRecipeDetails) {
    return this._httpClient.post(
      `${environment.baseURL}/api/recipe`,
      RecipeToAdd
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
}

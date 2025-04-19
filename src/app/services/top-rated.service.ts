import { Injectable } from '@angular/core';
import { IRecipeDetails } from '../models/irecipe-details';

@Injectable({
  providedIn: 'root',
})
export class TopRatedService {
  constructor() {}
  mockRecipes: IRecipeDetails[] = [
    
  ];
}

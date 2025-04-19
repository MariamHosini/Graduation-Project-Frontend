import { IAuthor } from './iauthor';
import { IRecipeIngredieent } from './irecipe-ingredieent';

export interface RecipeCreated {
  
  title: string;
  
  instructions: string;
  
  prepTime: number;
  
  description: string;
  
  cookingTime: number;
  
  cuisineType: string;
  image: string;
  
  author: IAuthor;

  categoryNames: string[];

  ingredients: IRecipeIngredieent[];
}

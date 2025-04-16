import { IAuthor } from './iauthor';
import { IComment } from './icomment';
import { IRating } from './irating';
import { IRecipeIngredieent } from './irecipe-ingredieent';

export interface IRecipeDetails {
  RecipeID: number;
  Title: string;
  Instruction: string;
  PrepTime: number;
  Calories: number;
  Description: string;
  CookingTime: number;
  CuisineType: string;
  CreatedAt: Date;
  Author: IAuthor;
  CreatorName: string;
  Ingredients: IRecipeIngredieent[];
  Ratings: IRating;
  Comments: IComment[];
  CategoryNames: String[];
  TotalCalories: number;
  ImageURl: string;
}

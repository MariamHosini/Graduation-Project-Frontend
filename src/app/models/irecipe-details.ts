import { IAuthor } from './iauthor';
import { IComment } from './icomment';
import { IRating } from './irating';
import { IRecipeIngredieent } from './irecipe-ingredieent';

export interface IRecipeDetails {
  RecipeID: number;
  Title: string;
  ImageURl: string;
  Instruction: string;
  PrepTime: number;
  Description: string;
  CookingTime: number;
  CuisineType: string;
  CreatedAt: Date;
  Author: IAuthor;
  Comments: IComment;
  CategoryNames: String[];
  RecipeIngredients: IRecipeIngredieent[];
  Ratings: IRating;
}

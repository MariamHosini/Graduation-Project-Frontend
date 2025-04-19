import { IAuthor } from './iauthor';
import { IComment } from './icomment';
import { IIngredient } from './iingredient';
import { IRating } from './irating';
import { IRecipeIngredieent } from './irecipe-ingredieent';

export interface IRecipeDetails {
  recipeID: number;
  title: string;
  instructions: string;
  prepTime: number;
  avgRating : number;
  calories: number;
  protein: number;
  carbs: number;
  fats: number;
  description: string;
  cookingTime: number;
  cuisineType: string;
  createdAt: Date;
  image: string;
  author: IAuthor;
  creatorName: string;
  ingredients: IIngredient[];
  ratings: IRating;
  comments: IComment[];
  categoryNames: String[];
  totalCalories: number;
}

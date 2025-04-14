import { IIngredient } from './iingredient';

export interface IRecipeIngredieent {
  Quantity: number;
  Unit: string;
  IngredientID: number;
  IngredientName: string;
  CaloriesPer100g: number;
  Protein: number;
}

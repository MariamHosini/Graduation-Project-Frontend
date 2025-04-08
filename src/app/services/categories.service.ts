import { Injectable } from '@angular/core';
import { ICategory } from '../models/icategory';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  constructor() {}
  categories: ICategory[] = [
    // Popular Categories
    { Id: 1, Name: 'Quick and Easy', Group: 'Popular' },
    { Id: 2, Name: 'Instant Pot', Group: 'Popular' },
    { Id: 3, Name: 'Meal Prep', Group: 'Popular' },
    { Id: 4, Name: 'Vegan', Group: 'Popular' },
    { Id: 5, Name: 'Vegetarian', Group: 'Popular' },
    { Id: 6, Name: 'Sugar-Free', Group: 'Popular' },
    { Id: 7, Name: 'Pasta', Group: 'Popular' },
    { Id: 8, Name: 'Tacos', Group: 'Popular' },
    { Id: 9, Name: 'Bowls', Group: 'Popular' },
    { Id: 10, Name: 'Soups', Group: 'Popular' },
    { Id: 11, Name: 'Salads', Group: 'Popular' },
    { Id: 12, Name: 'Dinner', Group: 'Popular' },
    { Id: 13, Name: 'Kid-Friendly', Group: 'Popular' },
    { Id: 14, Name: 'Most Popular', Group: 'Popular' },
    { Id: 15, Name: 'All Recipes', Group: 'Popular' },

    // Recipes by Meal Type
    { Id: 16, Name: 'Breakfast', Group: 'MealType' },
    { Id: 17, Name: 'Lunch', Group: 'MealType' },
    { Id: 18, Name: 'Dinner', Group: 'MealType' },
    { Id: 19, Name: 'Appetizer', Group: 'MealType' },
    { Id: 20, Name: 'Snacks', Group: 'MealType' },
    { Id: 21, Name: 'Desserts', Group: 'MealType' },
    { Id: 22, Name: 'Drinks', Group: 'MealType' },

    // Recipes by Course
    { Id: 23, Name: 'Appetizer', Group: 'Course' },
    { Id: 24, Name: 'Soups', Group: 'Course' },
    { Id: 25, Name: 'Salads', Group: 'Course' },
    { Id: 26, Name: 'Sauces', Group: 'Course' },
    { Id: 27, Name: 'Sides', Group: 'Course' },
    { Id: 28, Name: 'Desserts', Group: 'Course' },
    { Id: 29, Name: 'Snacks', Group: 'Course' },
    { Id: 30, Name: 'Baking', Group: 'Course' },
    { Id: 31, Name: 'Sandwiches', Group: 'Course' },
  ];
  getByGroup(name: string) {
    return this.categories.filter((category) => category.Group == name);
  }
}

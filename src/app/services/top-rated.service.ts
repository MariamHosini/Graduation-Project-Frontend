import { Injectable } from '@angular/core';
import { IRecipeDetails } from '../models/irecipe-details';

@Injectable({
  providedIn: 'root',
})
export class TopRatedService {
  constructor() {}
  mockRecipes: IRecipeDetails[] = [
    {
      RecipeID: 1,
      Title: 'Classic Koshari',
      ImageURl:
        'data:image/jpeg;base64,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',
      Instruction:
        'Boil lentils, mix with rice and pasta, top with tomato sauce and fried onions.',
      PrepTime: 20,
      Description: 'A delicious Egyptian street food classic.',
      CookingTime: 40,
      CuisineType: 'Egyptian',
      CreatedAt: new Date('2024-01-10'),
      Author: { UserName: 'OmYoussef', Id: 'user123' },
      Comments: {
        CommentID: '101',
        Content: 'Yummy!',
        CreatedAt: new Date('2024-01-11'),
      },
      CategoryNames: ['Vegan', 'Street Food'],
      RecipeIngredients: [
        {
          Quantity: 1,
          Unit: 'cup',

          IngredientName: 'Lentils',
          CaloriesPer100g: 116,
          Protein: 9.02,
          IngredientID: 1,
        },
        {
          Quantity: 1,
          Unit: 'cup',

          IngredientName: 'Lentils',
          CaloriesPer100g: 116,
          Protein: 9.02,
          IngredientID: 1,
        },
        {
          Quantity: 1,
          Unit: 'cup',

          IngredientName: 'Lentils',
          CaloriesPer100g: 116,
          Protein: 9.02,
          IngredientID: 1,
        },
      ],
      Ratings: { score: 4.8 },
    },
    {
      RecipeID: 2,
      Title: 'Molokhia with Chicken',
      ImageURl:
        'https://urbanfarmandkitchen.com/wp-content/uploads/2024/02/molokhia-stew-7.jpg',
      Instruction:
        'Boil chicken, cook molokhia leaves with garlic, and serve with rice.',
      PrepTime: 15,
      Description: 'Classic Egyptian green soup.',
      CookingTime: 30,
      CuisineType: 'Egyptian',
      CreatedAt: new Date('2024-02-05'),
      Author: { UserName: 'ChefHana', Id: 'user456' },
      Comments: {
        CommentID: '102',
        Content: 'Very traditional!',
        CreatedAt: new Date('2024-02-06'),
      },
      CategoryNames: ['Traditional', 'Soup'],
      RecipeIngredients: [],
      Ratings: { score: 4.6 },
    },
    {
      RecipeID: 3,
      Title: 'Spaghetti Bolognese',
      ImageURl:
        'http://step-by-step-cook.co.uk/images/mains/bolognese/bolo29.jpg',
      Instruction: 'Cook pasta and meat sauce, then mix and serve.',
      PrepTime: 15,
      Description: 'Italian classic with tomato and beef.',
      CookingTime: 35,
      CuisineType: 'Italian',
      CreatedAt: new Date('2024-03-01'),
      Author: { UserName: 'MarcoChef', Id: 'user789' },
      Comments: {
        CommentID: '103',
        Content: 'Molto bene!',
        CreatedAt: new Date('2024-03-02'),
      },
      CategoryNames: ['Pasta'],
      RecipeIngredients: [],
      Ratings: { score: 4.7 },
    },
    {
      RecipeID: 4,
      Title: 'Chicken Tikka Masala',
      ImageURl:
        'https://www.indianhealthyrecipes.com/wp-content/uploads/2022/06/chicken-tikka-masala-restaurant-style.webp',
      Instruction: 'Marinate chicken, grill and simmer in creamy sauce.',
      PrepTime: 25,
      Description: 'Popular Indian dish with rich spices.',
      CookingTime: 40,
      CuisineType: 'Indian',
      CreatedAt: new Date('2024-03-12'),
      Author: { UserName: 'SpiceKing', Id: 'user321' },
      Comments: {
        CommentID: '104',
        Content: 'Nice spice level!',
        CreatedAt: new Date('2024-03-13'),
      },
      CategoryNames: ['Spicy', 'Chicken'],
      RecipeIngredients: [],
      Ratings: { score: 4.9 },
    },
    {
      RecipeID: 5,
      Title: 'Beef Tacos',
      ImageURl:
        'https://www.allrecipes.com/thmb/aeIJJTEcX9zF8mEISq6OfoKd0xk=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/229112-ground-beef-with-homemade-taco-seasoning-mix-DDMFS-4x3-719013d51e844a948c0b39cccb5ed908.jpg',
      Instruction: 'Prepare beef, fill tortillas, and top with veggies.',
      PrepTime: 10,
      Description: 'Mexican-style fast snack.',
      CookingTime: 20,
      CuisineType: 'Mexican',
      CreatedAt: new Date('2024-04-01'),
      Author: { UserName: 'TacoQueen', Id: 'user654' },
      Comments: {
        CommentID: '105',
        Content: 'So easy and good!',
        CreatedAt: new Date('2024-04-01'),
      },
      CategoryNames: ['Snacks'],
      RecipeIngredients: [],
      Ratings: { score: 4.4 },
    },
    {
      RecipeID: 6,
      Title: 'Sushi Rolls',
      ImageURl:
        'https://www.fifteenspatulas.com/wp-content/uploads/2016/06/Homemade-Sushi-2-640x959.jpg',
      Instruction: 'Roll rice and fish in seaweed, slice and serve.',
      PrepTime: 30,
      Description: 'Japanese delicacy.',
      CookingTime: 10,
      CuisineType: 'Japanese',
      CreatedAt: new Date('2024-04-05'),
      Author: { UserName: 'SushiSensei', Id: 'user999' },
      Comments: {
        CommentID: '106',
        Content: 'So fresh!',
        CreatedAt: new Date('2024-04-06'),
      },
      CategoryNames: ['Seafood'],
      RecipeIngredients: [],
      Ratings: { score: 4.9 },
    },
    {
      RecipeID: 7,
      Title: 'Falafel Wrap',
      ImageURl:
        'https://cookingwithayeh.com/wp-content/uploads/2024/03/Falafel-Wrap-1.jpg',
      Instruction: 'Fry falafel, wrap with veggies in pita bread.',
      PrepTime: 15,
      Description: 'Middle Eastern vegan favorite.',
      CookingTime: 10,
      CuisineType: 'Middle Eastern',
      CreatedAt: new Date('2024-04-07'),
      Author: { UserName: 'FalafelFan', Id: 'user321' },
      Comments: {
        CommentID: '107',
        Content: 'Crispy outside, soft inside!',
        CreatedAt: new Date('2024-04-08'),
      },
      CategoryNames: ['Vegan'],
      RecipeIngredients: [],
      Ratings: { score: 4.5 },
    },
    {
      RecipeID: 8,
      Title: 'French Onion Soup',
      ImageURl:
        'https://www.allrecipes.com/thmb/Gbc7uhdR6AVQ1IbmbBWGyAUxPRY=/0x512/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/13309-rich-and-simple-french-onion-soup-DDMFS-4x3-31ad7eaa56234d20ae35c3940fd03f36.jpg',
      Instruction: 'Caramelize onions, add broth and bake with cheese toast.',
      PrepTime: 20,
      Description: 'Savory French soup.',
      CookingTime: 45,
      CuisineType: 'French',
      CreatedAt: new Date('2024-04-09'),
      Author: { UserName: 'BistroBoss', Id: 'user555' },
      Comments: {
        CommentID: '108',
        Content: 'Rich and warm.',
        CreatedAt: new Date('2024-04-10'),
      },
      CategoryNames: ['Soup'],
      RecipeIngredients: [],
      Ratings: { score: 4.3 },
    },
    {
      RecipeID: 9,
      Title: 'Pad Thai',
      ImageURl:
        'https://www.recipetineats.com/tachyon/2018/05/Chicken-Pad-Thai_9.jpg?resize=900%2C1260&zoom=0.72',
      Instruction: 'Stir fry noodles with sauce, shrimp, and peanuts.',
      PrepTime: 25,
      Description: 'Popular Thai street food.',
      CookingTime: 15,
      CuisineType: 'Thai',
      CreatedAt: new Date('2024-04-10'),
      Author: { UserName: 'ThaiTiger', Id: 'user888' },
      Comments: {
        CommentID: '109',
        Content: 'Better than takeout!',
        CreatedAt: new Date('2024-04-10'),
      },
      CategoryNames: ['Noodles'],
      RecipeIngredients: [],
      Ratings: { score: 4.7 },
    },
  ];
}

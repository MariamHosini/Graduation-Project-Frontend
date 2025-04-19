import { Component } from '@angular/core';
import { APIRecipeService } from '../../services/apirecipe.service';
import { APICategoriesService } from '../../services/api-categories.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  
  constructor(private _recipe : APIRecipeService ,  private _apiCategories: APICategoriesService ,private router : Router  )
  {}
  
  Clicked(arg0: number) {
    console.log("clicked");
      this.router.navigateByUrl(`recipesShow/${arg0}`);
}

}

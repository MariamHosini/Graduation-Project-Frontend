import { Component } from '@angular/core';
import { IRecipeDetails } from '../../models/irecipe-details';
import { TopRatedService } from '../../services/top-rated.service';
import { Router } from '@angular/router';
import { IuserEmail } from '../../models/iuser-email';
import { EmailService } from '../../services/email.service';

@Component({
  selector: 'app-user-profile',
  standalone: false,
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css',
})
export class UserProfileComponent {
  edit: boolean = false;
  topRated: IRecipeDetails[] = [] as IRecipeDetails[];
  user: IuserEmail = {} as IuserEmail;
  constructor(
    private _TopRatedService: TopRatedService,
    private _router: Router,
    private _email: EmailService
  ) {}

  ngOnInit() {
    this.topRated = this._TopRatedService.mockRecipes;
    this.user = this._email.Users[0];
  }
  getRecipe(receipeId: number) {
    this._router.navigateByUrl(`oneRecipeShow/${receipeId}`);
  }
  EditData(email: string) {
    this._router.navigateByUrl(`EditProfile/${email}`);
  }
}

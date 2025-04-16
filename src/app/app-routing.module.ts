import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { StartHereComponent } from './components/start-here/start-here.component';
import { ReceipeComponent } from './components/receipe/receipe.component';
import { RecipesShowComponent } from './components/recipes-show/recipes-show.component';
import { OneRecipeShowComponent } from './components/one-recipe-show/one-recipe-show.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { AdminProfileComponent } from './components/admin-profile/admin-profile.component';
import { ProfileDataEditingComponent } from './components/profile-data-editing/profile-data-editing.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'recipe', component: ReceipeComponent },
  { path: 'Login', component: LogInComponent },
  { path: 'SignUp', component: SignUpComponent },
  { path: 'startHere', component: StartHereComponent },
  { path: 'recipesShow/:id', component: RecipesShowComponent },
  { path: 'oneRecipeShow/:recipeID', component: OneRecipeShowComponent },
  { path: 'UserProfile/:UserId', component: UserProfileComponent },
  { path: 'Admin/:UserId', component: AdminProfileComponent },
  { path: 'EditProfile/:UserEmail', component: ProfileDataEditingComponent },

  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

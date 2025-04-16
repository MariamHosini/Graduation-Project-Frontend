import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/about/about.component';
import { ReceipeComponent } from './components/receipe/receipe.component';
import { StartHereComponent } from './components/start-here/start-here.component';
import { StarRatingComponent } from './components/star-rating/star-rating.component';
import { RecipesShowComponent } from './components/recipes-show/recipes-show.component';
import { OneRecipeShowComponent } from './components/one-recipe-show/one-recipe-show.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { AdminProfileComponent } from './components/admin-profile/admin-profile.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { ProfileDataEditingComponent } from './components/profile-data-editing/profile-data-editing.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    ReceipeComponent,
    StartHereComponent,
    StarRatingComponent,
    RecipesShowComponent,
    OneRecipeShowComponent,
    LogInComponent,
    SignUpComponent,
    UserProfileComponent,
    AdminProfileComponent,
    ProfileDataEditingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgSelectModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

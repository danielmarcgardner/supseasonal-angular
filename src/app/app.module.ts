import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MonthSearchComponent } from './month-search/month-search.component';
import { IngredientSearchComponent } from './ingredient-search/ingredient-search.component';
import { HomeViewComponent } from './home-view/home-view.component';
import {SuiModule} from 'ng2-semantic-ui';
import { MonthResultsComponent } from './month-results/month-results.component';
import { supSearchInjectables } from './month-search/search-months.injectables';
import { MonthViewComponent } from './month-view/month-view.component';
import { RouterModule, Routes} from '@angular/router';
import { RecipesViewComponent } from './recipes-view/recipes-view.component';
import { supMonthSearchInjectables } from './ingredient-search/ingredient-search.injectable';
import { IngredientViewComponent } from './ingredient-view/ingredient-view.component';
import { IngredientTableComponent } from './ingredient-table/ingredient-table.component';
import { RecipeDropdownComponent } from './recipe-dropdown/recipe-dropdown.component';
import { RecipeBoxesComponent } from './recipe-boxes/recipe-boxes.component';

const routes: Routes =[
{path: '', redirectTo: 'home', pathMatch: 'full'},
{path: 'home', component: HomeViewComponent },
{path: 'month', component: MonthViewComponent },
{path: 'ingredient', component: IngredientViewComponent },
{path: 'recipe', component: RecipesViewComponent }
]



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MonthSearchComponent,
    IngredientSearchComponent,
    HomeViewComponent,
    MonthResultsComponent,
    MonthViewComponent,
    RecipesViewComponent,
    IngredientViewComponent,
    IngredientTableComponent,
    RecipeDropdownComponent,
    RecipeBoxesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SuiModule,
    RouterModule.forRoot(routes)
  ],
  providers: [supSearchInjectables, supMonthSearchInjectables],
  bootstrap: [AppComponent]
})
export class AppModule { }

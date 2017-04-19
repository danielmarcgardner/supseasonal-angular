import { Component, OnInit } from '@angular/core';
import { RecipeResult } from '../recipe-dropdown/recipe.model';

@Component({
  selector: 'app-recipes-view',
  templateUrl: './recipes-view.component.html',
  styleUrls: ['./recipes-view.component.css']
})
export class RecipesViewComponent implements OnInit {
  resultsRecipe: RecipeResult[];
  loadingRecipe: boolean;

  constructor() { }

  ngOnInit() {
  }

  updateResults(results: RecipeResult[]): void {
    this.resultsRecipe = results
  }

}

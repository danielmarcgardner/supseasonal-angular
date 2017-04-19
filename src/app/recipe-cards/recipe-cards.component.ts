import { Component, OnInit, Input } from '@angular/core';
import { RecipeResult } from '../recipe-dropdown/recipe.model'

@Component({
  selector: 'app-recipe-cards',
  templateUrl: './recipe-cards.component.html',
  styleUrls: ['./recipe-cards.component.css']
})
export class RecipeCardsComponent implements OnInit {
  @Input() resultRecipe: RecipeResult;

  constructor() {
  }

  ngOnInit() {
  }

}

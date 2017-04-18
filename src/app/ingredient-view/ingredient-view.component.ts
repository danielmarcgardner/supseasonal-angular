import { Component, OnInit } from '@angular/core';
import { IngredientResult } from '../ingredient-search/ingredient-results.model'

@Component({
  selector: 'app-ingredient-view',
  templateUrl: './ingredient-view.component.html',
  styleUrls: ['./ingredient-view.component.css']
})
export class IngredientViewComponent implements OnInit {
  resultsFood: IngredientResult[];
  loadingFood: boolean;

  constructor() { }

  ngOnInit() {
  }

  updateResults(results: IngredientResult[]): void {
    this.resultsFood = results
    console.log('resultsfood', this.resultsFood)
  }
}

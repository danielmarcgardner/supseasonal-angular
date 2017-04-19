import { Component, OnInit } from '@angular/core';
import { IngredientResult } from '../ingredient-search/ingredient-results.model';

@Component({
  selector: 'app-month-view',
  templateUrl: './month-view.component.html',
  styleUrls: ['./month-view.component.css']
})

export class MonthViewComponent implements OnInit {
  results: IngredientResult[];
  loading: boolean;

  constructor() {

  }

  ngOnInit() {
  }

  updateResults(results: IngredientResult[]): void {
    this.results = results;
  }

}

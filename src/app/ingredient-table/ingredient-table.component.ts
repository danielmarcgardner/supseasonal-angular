import { Component, OnInit, Input } from '@angular/core';
import { IngredientResult } from '../ingredient-search/ingredient-results.model';

@Component({
  selector: 'app-ingredient-table',
  templateUrl: './ingredient-table.component.html',
  styleUrls: ['./ingredient-table.component.css']
})
export class IngredientTableComponent implements OnInit {
  @Input() resultFood: IngredientResult;

  constructor() { }

  ngOnInit() {
  }

}

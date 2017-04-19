import { Component,
  OnInit,
  Output,
  EventEmitter,
  ElementRef } from '@angular/core';
import { NgModule } from '@angular/core';
import { Months } from '../month-search/months'
import { RecipeResult } from './recipe.model'
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switch';
import { SupRecipeService } from './recipe.service';

@Component({
  selector: 'app-recipe-dropdown',
  templateUrl: './recipe-dropdown.component.html',
  styleUrls: ['./recipe-dropdown.component.css']
})
export class RecipeDropdownComponent implements OnInit {
  @Output() loadingRecipe: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() resultsRecipe: EventEmitter<RecipeResult[]> = new EventEmitter<RecipeResult[]>();

  selectedMonth:string;
  monthArr = [
    new Months('jan', 'January'),
    new Months('feb', 'February'),
    new Months('mar', 'March'),
    new Months('apr', 'April'),
    new Months('may', 'May'),
    new Months('jun', 'June'),
    new Months('jul', 'July'),
    new Months('aug', 'August'),
    new Months('sep', 'September'),
    new Months('oct', 'October'),
    new Months('nov', 'November'),
    new Months('dec', 'December'),
  ];

  dropdownSelect(value:string): void {
    this.selectedMonth = value;
  }

  searchRecipe(query:string) {
    Observable.fromEvent(this.el.nativeElement, 'click')
     .map((query: string) => this.supSearch.searchRecipe(this.selectedMonth))
     .switch()
     .subscribe(
       (results: RecipeResult[]) => {
         console.log(results)
         this.loadingRecipe.emit(false);
         this.resultsRecipe.emit(results);
       },
       (err: any) => {
         console.log(err);
         this.loadingRecipe.emit(false);
       },
       () => {
         this.loadingRecipe.emit(false);
       }
     );
   }

  constructor(private supSearch: SupRecipeService, private el: ElementRef) {

  }

  ngOnInit() {
  }

}

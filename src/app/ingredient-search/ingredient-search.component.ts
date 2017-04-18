import { Component,
  OnInit,
  Output,
  EventEmitter,
  ElementRef  } from '@angular/core';
// import { SupSearchDropdown } from './ingredient-search.service';
import { NgModule } from '@angular/core';
import { Food } from './food'
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switch';
import { SupSearchFoods } from './ingredient-search.service';
import { IngredientResult } from './ingredient-results.model'

@Component({
  selector: 'app-ingredient-search',
  templateUrl: './ingredient-search.component.html',
  styleUrls: ['./ingredient-search.component.css']
})
export class IngredientSearchComponent implements OnInit {
  @Output() loadingFood: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() resultsFood: EventEmitter<IngredientResult[]> = new EventEmitter<IngredientResult[]>();

  foodArr=[];
  selectedIngredient:number;

  constructor(private http:Http, private supFood:SupSearchFoods, private el: ElementRef) { }

  ngOnInit() {
    this.http.request('http://supseasonal.herokuapp.com/api/foods')
      .subscribe((res: Response)=> {
        return(<any> res.json().map((item) => {
          return this.foodArr.push(new Food(item.id, item.food_name))
        })
      )}
  )}

  dropdownSelect(value:number): void {
    this.selectedIngredient = value;
  }

  searchFood(id: number) {
    Observable.fromEvent(this.el.nativeElement, 'click')
      .map((id: number) => this.supFood.searchFood(this.selectedIngredient))
      .switch()
      .subscribe(
        (results: IngredientResult[]) => {
          this.loadingFood.emit(false);
          this.resultsFood.emit(results);
        },
        (err: any) => {
          console.log(err);
          this.loadingFood.emit(false);
        },
        () => {
          this.loadingFood.emit(false);
        }
      );
 }
}

import { Component,
  OnInit,
  Output,
  EventEmitter,
  ElementRef } from '@angular/core';
import { NgModule } from '@angular/core';
import { Months } from '../month-search/months'
import { MonthSearchResult } from '../month-results/month-results.model'
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switch';
// import { SupSearchService } from './search-months.service';

@Component({
  selector: 'app-recipe-dropdown',
  templateUrl: './recipe-dropdown.component.html',
  styleUrls: ['./recipe-dropdown.component.css']
})
export class RecipeDropdownComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

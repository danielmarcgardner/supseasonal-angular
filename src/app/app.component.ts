import { Component, OnInit } from '@angular/core';
import { MonthSearchResult } from './month-results/month-results.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  // results: MonthSearchResult[];
  // loading: boolean;

  constructor(){}

  ngOnInit(){}

  // updateResults(results: MonthSearchResult[]): void {
  //   this.results = results
  //   console.log(this.results)
  // }
}

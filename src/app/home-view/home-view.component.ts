import { Component, OnInit } from '@angular/core';
import { MonthSearchResult } from '../month-results/month-results.model'


@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.css']
})
export class HomeViewComponent implements OnInit {
  results: MonthSearchResult[];
  loading: boolean;

  constructor() { }

  ngOnInit() {
  }

  updateResults(results: MonthSearchResult[]): void {
    this.results = results
  }

}

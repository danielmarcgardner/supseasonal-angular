import { Component, OnInit } from '@angular/core';
import { MonthSearchResult } from '../month-results/month-results.model';

@Component({
  selector: 'app-month-view',
  templateUrl: './month-view.component.html',
  styleUrls: ['./month-view.component.css']
})

export class MonthViewComponent implements OnInit {
  results: MonthSearchResult[];
  loading: boolean;

  constructor() {

  }

  ngOnInit() {
  }

}

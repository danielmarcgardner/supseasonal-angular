import { Component, OnInit, Input } from '@angular/core';
import { MonthSearchResult } from './month-results.model';

@Component({
  selector: 'app-month-results',
  templateUrl: './month-results.component.html',
  styleUrls: ['./month-results.component.css']
})
export class MonthResultsComponent implements OnInit {
  @Input() result: MonthSearchResult;

  constructor() {

  }

  ngOnInit() {
  }

}

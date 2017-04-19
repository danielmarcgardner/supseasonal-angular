import { Component,
  OnInit,
  Output,
  EventEmitter,
  ElementRef } from '@angular/core';
import { NgModule } from '@angular/core';
import { Months } from './months';
import { MonthSearchResult } from '../month-results/month-results.model';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switch';
import { SupSearchService } from './search-months.service';

@Component({
  selector: 'app-month-search',
  templateUrl: './month-search.component.html',
  styleUrls: ['./month-search.component.css']
})

export class MonthSearchComponent implements OnInit {
  @Output() loading: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() results: EventEmitter<MonthSearchResult[]> = new EventEmitter<MonthSearchResult[]>();

  selectedMonth: string;
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

  dropdownSelect(value: string): void {
    this.selectedMonth = value;
  }

  searchMonth(query: string) {
    Observable.fromEvent(this.el.nativeElement, 'click')
    .map((query: string) => this.supSearch.search(this.selectedMonth))
    .switch()
    .subscribe(
      (results: MonthSearchResult[]) => {
        this.loading.emit(false);
        this.results.emit(results);
      },
      (err: any) => {
        console.log(err);
        this.loading.emit(false);
      },
      () => {
        this.loading.emit(false);
      }
    );
  }
  constructor(private supSearch: SupSearchService, private el: ElementRef  ) {

  }

  ngOnInit() {
  }

}

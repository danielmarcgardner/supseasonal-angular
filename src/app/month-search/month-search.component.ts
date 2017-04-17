import { Component,
  OnInit,
  Output,
  EventEmitter,
  ElementRef } from '@angular/core';
// import { DropdownModule, SelectItem } from 'primeng/primeng';
import { NgModule } from '@angular/core';
import { Months } from './months'
import { MonthSearchResult } from '../month-results/month-results.model'
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/do';
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

 searchMonth(query) {
   Observable.fromEvent(this.el.nativeElement, 'click')
    //  .map((e: any) => e.target.value) // extract the value of the input
    //  .filter((text: string) => text.length > 1) // filter out if empty
    //  .debounceTime(250)                         // only once every 250ms
    //  .do(() => this.loading.emit(true))         // enable loading
    //  // search, discarding old events if new input comes in
     .map((query: string) => this.supSearch.search(this.selectedMonth))
     .switch()
     // act on the return of the search
     .subscribe(
       (results: MonthSearchResult[]) => { // on sucesss
         console.log('hi')
         this.loading.emit(false);
         this.results.emit(results);
       },
       (err: any) => { // on error
         console.log(err);
         this.loading.emit(false);
       },
       () => { // on completion
         this.loading.emit(false);
       }
     );
}

  //
  //   console.log("hello");
  //   return this.http.get(`http://supseasonal.herokuapp.com/api/months/${this.selectedMonth}`).map((response: Response) => {
  //     console.log('hi');
  //     return (<any>response.json()).map(item => {
  //       console.log("raw item", item);
  //       return new MonthSearchResult({
  //         foodName: item.foodName,
  //         jan: item.jan,
  //         feb: item.feb,
  //         mar: item.mar,
  //         apr: item.apr,
  //         may: item.may,
  //         jun: item.jun,
  //         jul: item.jul,
  //         aug: item.aug,
  //         sep: item.sep,
  //         oct: item.oct,
  //         nov: item.nov,
  //         dec: item.dec
  //       })
  //     })
  //   })
  // }


  // months: SelectItem[];
  // selectedMonth: string;

  constructor(private supSearch: SupSearchService, private el: ElementRef  ) {
  //   this.months = [];
  //   this.months.push({label: 'January', value: 'jan'});
  //   this.months.push({label: 'February', value: 'feb'});
  //   this.months.push({label: 'March', value: 'mar'});
  //   this.months.push({label: 'April', value: 'apr'});
  //   this.months.push({label: 'May', value: 'may'});
  //   this.months.push({label: 'June', value: 'jun'});
  //   this.months.push({label: 'July', value: 'jul'});
  //   this.months.push({label: 'August', value: 'aug'});
  //   this.months.push({label: 'September', value: 'sep'});
  //   this.months.push({label: 'October', value: 'oct'});
  //   this.months.push({label: 'November', value: 'nov'});
  //   this.months.push({label: 'December', value: 'dec'});
  }

  ngOnInit() {
  }

}

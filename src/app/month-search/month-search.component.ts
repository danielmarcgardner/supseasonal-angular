import { Component, OnInit } from '@angular/core';
// import { DropdownModule, SelectItem } from 'primeng/primeng';
import { NgModule } from '@angular/core';
import { Months } from'./months'

@Component({
  selector: 'app-month-search',
  templateUrl: './month-search.component.html',
  styleUrls: ['./month-search.component.css']
})

export class MonthSearchComponent implements OnInit {
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

  dropdownSelect(value:string){
    this.selectedMonth = value;
    console.log(this.selectedMonth)
  }
  // months: SelectItem[];
  // selectedMonth: string;

  constructor() {
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

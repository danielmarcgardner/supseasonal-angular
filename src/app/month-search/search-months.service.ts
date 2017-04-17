import {
  Injectable,
  Inject
} from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { MonthSearchResult } from '../month-results/month-results.model';

export const SUP_URL = 'http://supseasonal.herokuapp.com/api/months/';

@Injectable()
export class SupSearchService {
  constructor(private http: Http,
    @Inject(SUP_URL) private apiUrl: string) {

    }

    search(query: string): Observable<MonthSearchResult[]> {
      console.log('I am query', query)
      const queryUrl = `http://supseasonal.herokuapp.com/api/months/${query}`;
      console.log(queryUrl)
      return this.http.get(queryUrl)
      .map((response: Response) => {
        console.log(response);
        return (<any>response.json()).map(item => {
          console.log("raw item", item);
          return new MonthSearchResult({
            foodName: item.foodName,
            jan: item.jan,
            feb: item.feb,
            mar: item.mar,
            apr: item.apr,
            may: item.may,
            jun: item.jun,
            jul: item.jul,
            aug: item.aug,
            sep: item.sep,
            oct: item.oct,
            nov: item.nov,
            dec: item.dec
          })
        })
      })
    }
}

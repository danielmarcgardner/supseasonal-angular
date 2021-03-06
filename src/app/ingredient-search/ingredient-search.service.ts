import {
  Injectable,
  Inject
} from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { IngredientResult } from './ingredient-results.model';

export const SUP_URL = 'http://supseasonal.herokuapp.com/api/';

@Injectable()
export class SupSearchFoods {
  constructor(private http: Http,
    @Inject(SUP_URL) private apiUrl: string) {
  }

  searchFood(id: number): Observable<IngredientResult[]> {
    const queryUrl = `${this.apiUrl}foods/${id}`;
    return this.http.get(queryUrl)
    .map((response: Response) => {
      return (<any>response.json()).map(item => {
        return new IngredientResult({
          food_name: item.food_name,
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
        });
      });
    });
  }
}

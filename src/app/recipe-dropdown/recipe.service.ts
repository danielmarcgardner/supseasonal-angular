import {
  Injectable,
  Inject
} from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { RecipeResult } from './recipe.model';

export const SUP_URL = 'http://supseasonal.herokuapp.com/api/';

@Injectable()
export class SupRecipeService {
  constructor(private http: Http,
    @Inject(SUP_URL) private apiUrl: string) {

  }

  searchRecipe(query: string): Observable<RecipeResult[]> {
    const queryUrl = `${this.apiUrl}months/${query}/recipes`;
    return this.http.get(queryUrl)
    .map((response: Response) => {
      return (<any>response.json()).map(item => {
        return new RecipeResult({
          title: item.title,
          readyInMinutes: item.readyInMinutes,
          image: item.image,
          extendedIngredients: item.extendedIngredients,
          instructions: item.instructions
        });
      });
    });
  }
}

import {
 SupSearchFoods,
 SUP_URL,
} from './ingredient-search.service';

export const supMonthSearchInjectables: Array<any> = [
 {provide: SupSearchFoods, useClass: SupSearchFoods},
 {provide: SUP_URL, useValue: SUP_URL}
];

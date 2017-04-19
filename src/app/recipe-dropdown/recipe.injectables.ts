import {
 SupRecipeService,
 SUP_URL,
} from './recipe.service';

export const supRecipeInjectables: Array<any> = [
 {provide: SupRecipeService, useClass: SupRecipeService},
 {provide: SUP_URL, useValue: SUP_URL}
];

import {
 SupSearchService,
 SUP_URL,
} from './search-months.service';

export const supSearchInjectables: Array<any> = [
 {provide: SupSearchService, useClass: SupSearchService},
 {provide: SUP_URL, useValue: SUP_URL}
];

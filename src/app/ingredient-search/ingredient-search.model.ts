export class IngredientSearchResult {
  food_name: string;
  id: number;

  constructor(obj?: any) {
    this.food_name = obj && obj.food_name;
    this.id = obj && obj.id || null;
  }
}

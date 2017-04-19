export class RecipeResult {
  title: string;
  readyInMinutes: number;
  image: string;
  extendedIngredients: object;
  instructions: string;


  constructor(obj?: any) {
    this.title = obj && obj.title;
    this.readyInMinutes = obj && obj.readyInMinutes || null;
    this.image = obj && obj.image || null;
    this.extendedIngredients = obj && obj.extendedIngredients || null;
    this.instructions = obj && obj.instructions || null;
  }
}

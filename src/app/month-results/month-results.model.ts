export class MonthSearchResult {
  food_name: string;
  jan: boolean;
  feb: boolean;
  mar: boolean;
  apr: boolean;
  may: boolean;
  jun: boolean;
  jul: boolean;
  aug: boolean;
  sep: boolean;
  oct: boolean;
  nov: boolean;
  dec: boolean;

  constructor(obj?: any) {
    this.food_name = obj && obj.food_name;
    this.jan = obj && obj.jan || null;
    this.feb = obj && obj.feb || null;
    this.mar = obj && obj.mar || null;
    this.apr = obj && obj.apr || null;
    this.may = obj && obj.may || null;
    this.jun = obj && obj.jun || null;
    this.jul = obj && obj.jul || null;
    this.aug = obj && obj.aug || null;
    this.sep = obj && obj.sep || null;
    this.oct = obj && obj.oct || null;
    this.nov = obj && obj.nov || null;
    this.dec = obj && obj.dec || null;
  }
}

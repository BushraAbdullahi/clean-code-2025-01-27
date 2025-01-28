import { Teaspoon } from "./Teaspoon";
export class Tablespoon {
  constructor(amount) {
    this.amount = amount;
  }

  equals(measurement) {
    if (measurement instanceof Teaspoon) {
      return this.amount * 3 === measurement.amount;
    }

    if (measurement instanceof Tablespoon) {
      return this.amount === measurement.amount;
    }
  }
}

import { Tablespoon } from "./Tablespoon";

export class Teaspoon {
  constructor(amount) {
    this.amount = amount;
  }

  equals(measurement) {
    if (measurement instanceof Teaspoon) {
      return this.amount === measurement.amount;
    } else if (measurement instanceof Tablespoon) {
      return false;
    }
  }
}


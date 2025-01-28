export class BaseClass {

  toTeaspoon(measurement) {
    if (measurement instanceof Teaspoon) {
      return this.amount === measurement.amount;
    } else if (measurement instanceof Tablespoon) {
      return this.amount / 3 === measurement.amount;
    }
  }
}
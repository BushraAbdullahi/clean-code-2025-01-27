import { Teaspoon } from "./Teaspoon";
import { Tablespoon } from "./Tablespoon";

describe("Measurement", () => {
  test("1 teaspoon equals 1 teaspoon", () =>
    expect(new Teaspoon(1).equals(new Teaspoon(1))).toBe(true));

  test("1 teaspoon does not equal 2 teaspoons", () =>
    expect(new Teaspoon(1).equals(new Teaspoon(2))).toBe(false));

  test("1 teaspoon does not equal 1 tablespoon", () =>
    expect(new Teaspoon(1).equals(new Tablespoon(1))).toBe(false));
});

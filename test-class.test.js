import { Teaspoon } from "./Teaspoon";
import { Tablespoon } from "./Tablespoon";

describe("Teaspoon", () => {
  test("1 teaspoon equals 1 teaspoon", () =>
    expect(new Teaspoon(1).equals(new Teaspoon(1))).toBe(true));

  test("1 teaspoon does not equal 2 teaspoons", () =>
    expect(new Teaspoon(1).equals(new Teaspoon(2))).toBe(false));

  test("1 teaspoon does not equal 1 tablespoon", () =>
    expect(new Teaspoon(1).equals(new Tablespoon(1))).toBe(false));

  test("3 teaspoons is equal to 1 tablespoon", () =>
    expect(new Teaspoon(3).equals(new Tablespoon(1))).toBe(true));
});

describe("Tablespoon", () => {
  test("1 tablespoon is equal to 3 teaspoons", () =>
    expect(new Tablespoon(1).equals(new Teaspoon(3))).toBe(true));

  test("1 tablespoon is not equal to 2 teaspoons", () =>
    expect(new Tablespoon(1).equals(new Teaspoon(2))).toBe(false));

  test("1 tablespoon equals 1 tablespoon", () =>
    expect(new Tablespoon(1).equals(new Tablespoon(1))).toBe(true));
})
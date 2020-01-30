import * as mod from "../tools/is_undefined.js";

describe("is_undefined", () => {
  describe("given a defined value", () => {
    test("is not undefined", () => {
      let x = 1;
      expect(mod.$isUndefined(x)).toBeFalsy();
    });
  })

  describe("given an undefined value", () => {
    test("is undefined", () => {
      let x;
      expect(mod.$isUndefined(x)).toBeTruthy();
    });
  })
});
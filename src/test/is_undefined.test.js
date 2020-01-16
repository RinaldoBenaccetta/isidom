const esmImport = require("esm")(module);
const mod = esmImport("../tools/is_undefined.js");

test("let x = 1 to be defined", () => {
    let x = 1;
  expect(mod.$isUndefined(x)).toBe(false);
});

test("x to be undefined", () => {
  let x;
  expect(mod.$isUndefined(x)).toBe(true);
});
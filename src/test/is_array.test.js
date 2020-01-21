const esmImport = require("esm")(module);
const mod = esmImport("../tools/is_array.js");

test("x as array to be an array", () => {
    let x = [1,2,3];
    expect(mod.$isArray(x)).toBe(true);
});

test("x as not assigned value not to be an array", () => {
    let x;
    expect(mod.$isArray(x)).toBe(false);
});

test("x as number not to be an array", () => {
    let x = 2;
    expect(mod.$isArray(x)).toBe(false);
});

test("x as object not to be an array", () => {
    let x = {a: "1", b: 2};
    expect(mod.$isArray(x)).toBe(false);
});

test("x as string not to be an array", () => {
    let x = "hello";
    expect(mod.$isArray(x)).toBe(false);
});
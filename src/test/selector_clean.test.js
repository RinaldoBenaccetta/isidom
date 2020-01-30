import * as mod from "../tools/selector_clean";

describe('selector_clean', () => {
    describe('given a string', () => {
        test('wich is a class name return the class name without .', () => {
            let className = '.myClass';
            expect(mod.$selectorClean(className)).toBe("myClass");
        });

        test("wich is a id name return the id name without #", () => {
          let idName = "#myId";
          expect(mod.$selectorClean(idName)).toBe("myId");
        });

        test("wich is a string return the string", () => {
          let string = "myString";
          expect(mod.$selectorClean(string)).toBe(string);
        });
    });
});
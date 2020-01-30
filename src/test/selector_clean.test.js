import * as mod from "../tools/selector_clean";

describe('selector_clean', () => {
    describe('given a string', () => {
        test('wich is a class name return the class name without .', () => {
            let className = '.myClass';
            expect(mod.$selectorClean(className)).toBe("myClass");
        });

        test("wich is a class name with spaces at start and end return the class name without . and spaces at start and end of the string", () => {
          let className = "   .myClass  ";
          expect(mod.$selectorClean(className)).toBe("myClass");
        });

        test("wich is a id name return the id name without #", () => {
          let idName = "#myId";
          expect(mod.$selectorClean(idName)).toBe("myId");
        });

        test("wich is a id name with spaces at start and end return the id name without # and spaces at start and end of the string", () => {
          let idName = "   #myId  ";
          expect(mod.$selectorClean(idName)).toBe("myId");
        });

        test("wich is a string return the string", () => {
          let string = "myString";
          expect(mod.$selectorClean(string)).toBe(string);
        });

        test("wich is a string with spaces at start and end return the string without spaces at start and end of the string", () => {
          let string = "    myString  ";
          expect(mod.$selectorClean(string)).toBe("myString");
        });
    });
});
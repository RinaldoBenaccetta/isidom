import * as mod from "../tools/array_to_string_list";

describe('arry_to_string_list', () => {
    describe('given a string and no argument', () => {
        test("wich is a class name return the class name with . at start", () => {
            let className = '.myClass';
            expect(mod.$arrayToStringList(className)).toBe(className);
        });

        test("wich is not a class name return a class name with . at start", () => {
          let className = "myClass";
          expect(mod.$arrayToStringList(className)).toBe(".myClass");
        });
    })

    describe("given a string and argument as true", () => {
      test("wich is a class name return the class name with . at start", () => {
        let className = ".myClass";
        expect(mod.$arrayToStringList(className, true)).toBe(className);
      });

      test("wich is not a class name return a class name with . at start", () => {
        let className = "myClass";
        expect(mod.$arrayToStringList(className, true)).toBe(".myClass");
      });
    });

    describe("given a string and argument as false", () => {
      test("wich is a class name return the class name without . at start", () => {
        let className = ".myClass";
        expect(mod.$arrayToStringList(className, false)).toBe("myClass");
      });

      test("wich is not a class name return a class name without . at start", () => {
        let className = "myClass";
        expect(mod.$arrayToStringList(className, false)).toBe(className);
      });
    });
});

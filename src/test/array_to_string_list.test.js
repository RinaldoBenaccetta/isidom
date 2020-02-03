import * as mod from '../tools/array_to_string_list'

describe('array_to_string_list', () => {
  describe('given a string and no argument', () => {
    test('wich is a class name return the class name with . at start', () => {
      const className = '.myClass'
      expect(mod.$arrayToStringList(className)).toBe(className)
    })

    test('wich is not a class name return a class name with . at start', () => {
      const className = 'myClass'
      expect(mod.$arrayToStringList(className)).toBe('.myClass')
    })
  })

  describe('given a string and argument as true', () => {
    test('wich is a class name return the class name with . at start', () => {
      const className = '.myClass'
      expect(mod.$arrayToStringList(className, true)).toBe(className)
    })

    test('wich is not a class name return a class name with . at start', () => {
      const className = 'myClass'
      expect(mod.$arrayToStringList(className, true)).toBe('.myClass')
    })
  })

  describe('given a string and argument as false', () => {
    test('wich is a class name return the class name without . at start', () => {
      const className = '.myClass'
      expect(mod.$arrayToStringList(className, false)).toBe('myClass')
    })

    test('wich is not a class name return a class name without . at start', () => {
      const className = 'myClass'
      expect(mod.$arrayToStringList(className, false)).toBe(className)
    })
  })

  describe('given an array of strings and no argument', () => {
    test('with class names and no class names return class names with each . at start', () => {
      const array = ['.myFirstClass', 'mySecondClass', '  myFirdClass']
      expect(mod.$arrayToStringList(array)).toBe(
        '.myFirstClass.mySecondClass.myFirdClass'
      )
    })
  })
})

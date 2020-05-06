import * as mod from '../../index'

describe('$arrayToStringList', () => {
  describe('given a string and no argument', () => {
    test('wich is a class name return the class name with . at start', () => {
      const className = '.myClass'
      expect(mod.$selectorArrayToString(className)).toBe(className)
    })

    test('wich is not a class name return a class name with . at start', () => {
      const className = 'myClass'
      expect(mod.$selectorArrayToString(className)).toBe('.myClass')
    })
  })

  describe('given a string and argument as true', () => {
    test('wich is a class name return the class name with . at start', () => {
      const className = '.myClass'
      expect(mod.$selectorArrayToString(className, true)).toBe(className)
    })

    test('wich is not a class name return a class name with . at start', () => {
      const className = 'myClass'
      expect(mod.$selectorArrayToString(className, true)).toBe('.myClass')
    })
  })

  describe('given a string and argument as false', () => {
    test('wich is a class name return the class name without . at start', () => {
      const className = '.myClass'
      expect(mod.$selectorArrayToString(className, false)).toBe('myClass')
    })

    test('wich is not a class name return a class name without . at start', () => {
      const className = 'myClass'
      expect(mod.$selectorArrayToString(className, false)).toBe(className)
    })
  })

  describe('given an array of strings and no argument', () => {
    test('with class names and no class names return class names with each . at start', () => {
      const array = ['.myFirstClass', 'mySecondClass', '  myFirdClass']
      expect(mod.$selectorArrayToString(array)).toBe(
        '.myFirstClass.mySecondClass.myFirdClass'
      )
    })
  })
})

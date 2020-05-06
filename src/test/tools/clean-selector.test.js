import { $cleanSelector } from '../../index'

describe('$selectorClean', () => {
  describe('given a string', () => {
    test('wich is a class name return the class name without .', () => {
      const className = '.myClass'
      expect($cleanSelector(className)).toBe('myClass')
    })

    test('wich is a class name with spaces at start and end return the class name without . and spaces at start and end of the string', () => {
      const className = '   .myClass  '
      expect($cleanSelector(className)).toBe('myClass')
    })

    test('wich is a id name return the id name without #', () => {
      const idName = '#myId'
      expect($cleanSelector(idName)).toBe('myId')
    })

    test('wich is a id name with spaces at start and end return the id name without # and spaces at start and end of the string', () => {
      const idName = '   #myId  '
      expect($cleanSelector(idName)).toBe('myId')
    })

    test('wich is a string return the string', () => {
      const string = 'myString'
      expect($cleanSelector(string)).toBe(string)
    })

    test('wich is a string with spaces at start and end return the string without spaces at start and end of the string', () => {
      const string = '    myString  '
      expect($cleanSelector(string)).toBe('myString')
    })
  })
})

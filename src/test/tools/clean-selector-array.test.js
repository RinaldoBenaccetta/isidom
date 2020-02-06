import { $cleanSelectorArray } from '../../tools/clean-selector-array'

describe('$selectorArrayClean', () => {
  describe('given an array of selectors', () => {
    test('wich is a mix of class, id and string return an array of string without . or # at the start and without space at start and end of the string', () => {
      const SELECTOR_ARRAY = [
        'myClass',
        '.myOtherClass',
        '#myId',
        '  anOtherSelector   '
      ]
      expect($cleanSelectorArray(SELECTOR_ARRAY)).toStrictEqual([
        'myClass',
        'myOtherClass',
        'myId',
        'anOtherSelector'
      ])
    })
    test('wich is a string return an array of the string without . or # at the start and without space at start and end of the string', () => {
      const SELECTOR_STRING = '.myClass'
      expect($cleanSelectorArray(SELECTOR_STRING)).toStrictEqual([
        'myClass'
      ])
    })
  })
})

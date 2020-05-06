import { $selectorToArray } from '../../index'

describe('$selectorArrayClean', () => {
  describe('given an array of selectors', () => {
    test('Which is a mix of class, id and string return an array of string without . or # at the start and without space at start and end of the string', () => {
      const SELECTOR_ARRAY = [
        'myClass',
        '.myOtherClass',
        '#myId',
        '  anOtherSelector   '
      ]
      expect($selectorToArray(SELECTOR_ARRAY)).toStrictEqual([
        'myClass',
        'myOtherClass',
        'myId',
        'anOtherSelector'
      ])
    })
    test('Which is a string return an array of the string without . or # at the start and without space at start and end of the string', () => {
      const SELECTOR_STRING = '.myClass'
      expect($selectorToArray(SELECTOR_STRING)).toStrictEqual(['myClass'])
    })
  })
})

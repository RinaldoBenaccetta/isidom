import * as mod from '../../tools/is-undefined'

describe('$isUndefined', () => {
  describe('given a defined value', () => {
    test('is not undefined', () => {
      const x = 1
      expect(mod.$isUndefined(x)).toBeFalsy()
    })
  })

  describe('given an undefined value', () => {
    test('is undefined', () => {
      let x
      expect(mod.$isUndefined(x)).toBeTruthy()
    })
  })
})

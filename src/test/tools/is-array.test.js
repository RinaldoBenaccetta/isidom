import * as mod from '../../lib/tools/is-array'

describe('$isArray', () => {
  describe('given an array', () => {
    test('is an array', () => {
      const x = [1, 2, 3]
      expect(mod.$isArray(x)).toBeTruthy()
    })
  })

  describe('given an undefined value', () => {
    test('is not an array', () => {
      let x
      expect(mod.$isArray(x)).toBeFalsy()
    })
  })

  describe('given a number', () => {
    test('is not an array', () => {
      const x = 2
      expect(mod.$isArray(x)).toBeFalsy()
    })
  })

  describe('given an object', () => {
    test('is not an array', () => {
      const x = { a: '1', b: 2 }
      expect(mod.$isArray(x)).toBeFalsy()
    })
  })

  describe('given a string', () => {
    test('is not an array', () => {
      const x = 'hello'
      expect(mod.$isArray(x)).toBeFalsy()
    })
  })
})

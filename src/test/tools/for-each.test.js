import { $forEach } from '../../lib/tools/for-each'
import '@testing-library/jest-dom'

describe('$forEach', () => {
  describe('given an array', () => {
    test('process the array', () => {
      const ARRAY_TO_PUSH = [1, 2, 3]
      // eslint-disable-next-line prefer-const
      let myArray = []

      const FUNCTION_TO_EXECUTE = function (value) {
        myArray.push(value)
      }

      $forEach(FUNCTION_TO_EXECUTE, ARRAY_TO_PUSH)

      expect(myArray).toStrictEqual([1, 2, 3])
    })
  })

  describe('given a nodelist', () => {
    test('process the nodelist', () => {
      document.body.innerHTML = '<div>hello</div><div>world</div><div>!</div>'
      const NODE_LIST = document.querySelectorAll('div')
      const FUNCTION_TO_EXECUTE = function (target) {
        target.classList.add('myClass')
      }
      $forEach(FUNCTION_TO_EXECUTE, NODE_LIST)
      const TEST_NODE = document.querySelectorAll('div')

      expect(TEST_NODE[0]).toHaveClass('myClass')
      expect(TEST_NODE[1]).toHaveClass('myClass')
      expect(TEST_NODE[2]).toHaveClass('myClass')
    })
  })

  describe('given other element than nodelist or array', () => {
    test('given a string, process with the string', () => {
      let testString
      const MY_STRING = 'Hello world!'
      const FUNCTION_TO_EXECUTE = function (string) {
        testString = string
      }
      $forEach(FUNCTION_TO_EXECUTE, MY_STRING)
      expect(testString).toBe(MY_STRING)
    })

    test('given a number, process with the number', () => {
      let testNumber
      const MY_NUMBER = 2
      const FUNCTION_TO_EXECUTE = function (number) {
        testNumber = 3 * number
      }
      $forEach(FUNCTION_TO_EXECUTE, MY_NUMBER)
      expect(testNumber).toBe(6)
    })

    test('given a boolean, process with the boolean', () => {
      let testBoolean
      const MY_BOOLEAN = true
      const FUNCTION_TO_EXECUTE = function (number) {
        if (number === true) {
          testBoolean = 42
        }
      }
      $forEach(FUNCTION_TO_EXECUTE, MY_BOOLEAN)
      expect(testBoolean).toBe(42)
    })

    test('given an object, process with the object', () => {
      let testObject
      const MY_OBJECT = {
        firstName: 'John',
        lastName: 'Doe',
        age: 50,
        eyeColor: 'blue'
      }
      const FUNCTION_TO_EXECUTE = function (number) {
        testObject = number.lastName
      }
      $forEach(FUNCTION_TO_EXECUTE, MY_OBJECT)
      expect(testObject).toBe('Doe')
    })
  })
})

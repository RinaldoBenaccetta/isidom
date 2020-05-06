import { $byId } from '../../index'
import '@testing-library/jest-dom'

document.body.innerHTML =
  // eslint-disable-next-line no-multi-str
  '<div class="myFirstClass myThirdClass">hello</div>\
  <div class="mySecondClass"></div>\
  <div class="myThirdClass">world</div>\
  <div class="myFourthClass"></div>\
  <div class ="myFirstClass">!</div>\
  <div class ="myFifthClass mySixthClass" id="myId">find me</div>\
  <div class="myFirstClass" id="mySecondId">\
    <div class="myFirstClass"></div>\
    <div class="myThirdClass mySecondClass" id="myThirdId">i am hidden here</div>\
    <div class="myFirstClass myThirdClass"></div>\
    <div class="mySecondClass myThirdClass"></div>\
  </div>'

describe('$byId', () => {
  describe('given a string', () => {
    test('Which is a valid id present on the DOM return an HTMLElement', () => {
      const ELEMENT = $byId('myId')
      const TEST_ELEMENT = ELEMENT instanceof HTMLElement
      expect(TEST_ELEMENT).toBeTruthy()
      expect(ELEMENT).toHaveTextContent('find me')
    })

    test('Which is an id not present in the DOM return NULL', () => {
      const ELEMENT = $byId('leftId')
      expect(ELEMENT).toBeNull()
    })
  })

  describe('given a string starting with #', () => {
    test('Which is a valid id present on the DOM return an HTMLElement', () => {
      const ELEMENT = $byId('#myId')
      const TEST_ELEMENT = ELEMENT instanceof HTMLElement
      expect(TEST_ELEMENT).toBeTruthy()
      expect(ELEMENT).toHaveTextContent('find me')
    })

    test('Which is an id not present in the DOM return NULL', () => {
      const ELEMENT = $byId('#leftId')
      expect(ELEMENT).toBeNull()
    })
  })

  describe('given a string starting with spaces at start and end', () => {
    test('Which is a valid id present on the DOM return an HTMLElement', () => {
      const ELEMENT = $byId('   myId  ')
      const TEST_ELEMENT = ELEMENT instanceof HTMLElement
      expect(TEST_ELEMENT).toBeTruthy()
      expect(ELEMENT).toHaveTextContent('find me')
    })

    test('Which is an id not present in the DOM return NULL', () => {
      const ELEMENT = $byId('     leftId  ')
      expect(ELEMENT).toBeNull()
    })
  })
})

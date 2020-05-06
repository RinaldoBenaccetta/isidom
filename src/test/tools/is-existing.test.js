import { $isExisting } from '../../index'
import '@testing-library/jest-dom'

document.body.innerHTML =
  // eslint-disable-next-line no-multi-str
  '<div class="myFirstClass myThirdClass">hello</div>\
  <div class="mySecondClass"></div>\
  <div class="myThirdClass">world</div>\
  <div class="myFourthClass"></div>\
  <div class ="onlyHereClass">!</div>\
  <div class ="myFifthClass mySixthClass">!</div>\
  <div class="myFirstClass" id="myId">\
    <div class="myFirstClass"></div>\
    <div class="myThirdClass mySecondClass"></div>\
    <div class="myFirstClass myThirdClass"></div>\
    <div class="mySecondClass myThirdClass"></div>\
  </div>'

describe('$isExisting', () => {
  describe('given a string', () => {
    test('given selector that exist in document return true', () => {
      const TEST = $isExisting('.myFirstClass')
      expect(TEST).toBeTruthy()
    })

    test("given selector that don't exist in document return false", () => {
      const TEST = $isExisting('.lostClass')
      expect(TEST).toBeFalsy()
    })
  })

  describe('given a string and an element', () => {
    const TARGET_ID = document.getElementById('myId')
    test('given an element that exist in the element return true', () => {
      const TEST = $isExisting('.myFirstClass', TARGET_ID)
      expect(TEST).toBeTruthy()
    })

    test("given an element that don't exist in the element but exist elsewhere return false", () => {
      const TEST = $isExisting('.onlyHereClass', TARGET_ID)
      expect(TEST).toBeFalsy()
    })

    test("given an element that don't exist in the element and don't exist elsewhere return false", () => {
      const TEST = $isExisting('.lostClass', TARGET_ID)
      expect(TEST).toBeFalsy()
    })
  })
})

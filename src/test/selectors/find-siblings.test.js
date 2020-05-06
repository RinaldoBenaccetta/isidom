import { $findSiblings } from '../../index'
import '@testing-library/jest-dom'

document.body.innerHTML =
  // eslint-disable-next-line no-multi-str
  '<div class="myFirstClass myThirdClass">hello</div>\
  <div class="mySecondClass"></div>\
  <div class="myThirdClass">world</div>\
  <span class="myFourthClass"></span>\
  <p class ="myFirstClass">!</p>\
  <div class ="myFifthClass mySixthClass">!</div>\
  <div class="myFirstClass" id="myId">\
    <div class="myFirstClass"></div>\
    <div class="myFirstClass myThirdClass" id="mySecondId"></div>\
    <div class="myThirdClass mySecondClass"></div>\
    <div class="mySecondClass myThirdClass"></div>\
  </div>\
  <div>\
    <div class="myFirstClass myThirdClass" id="sadId"></div>\
  </div>'

describe('$siblings', () => {
  describe('given an HTMLElement', () => {
    test('Which is present in the DOM and have siblings return an array of siblings', () => {
      const TARGET_ID = document.getElementById('mySecondId')
      const ARRAY = $findSiblings(TARGET_ID)
      const TEST_ARRAY = Array.isArray(ARRAY)
      expect(TEST_ARRAY).toBeTruthy()
      expect(ARRAY.length).toBe(3)
    })

    test('Which is present in the DOM and have no siblings return null', () => {
      const TARGET_ID = document.getElementById('sadId')
      const ARRAY = $findSiblings(TARGET_ID)
      expect(ARRAY).toBeNull()
    })
  })
})

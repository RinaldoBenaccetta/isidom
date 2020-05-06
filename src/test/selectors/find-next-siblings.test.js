import { $findNextSiblings } from '../../index'
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
    <div class="myFirstClass">It is not me</div>\
    <p class="myFirstClass myThirdClass" id="mySecondId"></p>\
    <div class="myThirdClass mySecondClass">Find me</div>\
    <div class="mySecondClass myThirdClass">Me too</div>\
  </div>\
  <div>\
    <div class="myFirstClass myThirdClass" id="sadId"></div>\
  </div>'

describe('$findNextSiblings', () => {
  describe('given an HTMLElement', () => {
    test('Which is present in the DOM and have siblings after return an array of the next siblings', () => {
      const TARGET_ID = document.getElementById('mySecondId')
      const ARRAY = $findNextSiblings(TARGET_ID)
      const TEST_ARRAY = Array.isArray(ARRAY)
      expect(TEST_ARRAY).toBeTruthy()
      expect(ARRAY.length).toBe(2)
      expect(ARRAY[0]).toHaveTextContent('Find me')
      expect(ARRAY[1]).toHaveTextContent('Me too')
    })
  })

  test('Which is present in the DOM and have no next siblings return null', () => {
    const TARGET_ID = document.getElementById('sadId')
    const ARRAY = $findNextSiblings(TARGET_ID)
    expect(ARRAY).toBeNull()
  })
})

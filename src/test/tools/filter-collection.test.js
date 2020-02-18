import { $filterCollection } from '../../lib/tools/filter-collection'
import '@testing-library/jest-dom'

document.body.innerHTML =
  // eslint-disable-next-line no-multi-str
  '<div class="myFirstClass myFirdClass">hello</div>\
  <div class="mySecondClass"></div>\
  <div class="myFirdClass">world</div>\
  <span class="myFourthClass"></span>\
  <p class ="myFirstClass">!</p>\
  <div class ="myFifthClass mySixthClass">!</div>\
  <div name="findMe" class="myFirstClass" id="myId">\
    <div class="myFirstClass"></div>\
    <div class="myFirstClass myThirdClass" id="mySecondId"></div>\
    <div class="myThirdClass mySecondClass"></div>\
    <div class="mySecondClass myThirdClass"></div>\
  </div>\
  <div>\
    <div name="it is not me" class="myFirstClass myThirdClass" id="sadId"></div>\
  </div>'

describe('$filterCollection', () => {
  describe('given valid filter and an HTMLCollection', () => {
    test('wich match HTMLElements return an array of HTMLElement', () => {
      const TARGET_ID = document.getElementsByClassName('myFirstClass')
      const TEST_FILTER = $filterCollection('.myThirdClass', TARGET_ID)
      const TEST_ARRAY = Array.isArray(TEST_FILTER)
      expect(TEST_ARRAY).toBeTruthy()
      expect(TEST_FILTER.length).toBe(2)
    })
  })
})

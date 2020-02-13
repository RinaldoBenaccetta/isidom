import { $getData } from '../../../manipulators/attributes/get-data'
import '@testing-library/jest-dom'

const DOC =
  // eslint-disable-next-line no-multi-str
  '<div name="Sarah Connor" class="myFirstClass myFirdClass">hello</div>\
  <div class="mySecondClass"></div>\
  <div class="myFirdClass">world</div>\
  <div class="myFourthClass"></div>\
  <div class ="myFirstClass">!</div>\
  <div class ="myFifthClass mySixthClass">!</div>\
  <div class="myFirstClass">\
    <div class="myFirstClass"></div>\
    <div class="myFirdClass mySecondClass"></div>\
    <input type="range" min="10" max="125" data-color="red" id="myId"></input>\
    <div class="mySecondClass myThirdClass"></div>\
  </div>'

describe('$getData', () => {
  describe('given a data-value and en HTMLElement', () => {
    test('wich data-value is an existing data in the HTMLElement, return the value of the data', () => {
      document.body.innerHTML = DOC
      const TARGET_ID = document.getElementById('myId')
      const TEST_DATA = $getData('color', TARGET_ID)
      expect(TEST_DATA).toBe('red')
    })

    test('wich data-value is a non existant data in the HTMLElement, return NULL', () => {
      document.body.innerHTML = DOC
      const TARGET_ID = document.getElementById('myId')
      const TEST_DATA = $getData('fictional', TARGET_ID)
      expect(TEST_DATA).toBeNull()
    })
  })
})

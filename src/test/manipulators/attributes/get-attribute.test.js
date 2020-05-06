import { $getAttribute } from '../../../index'
import '@testing-library/jest-dom'

const DOC =
  // eslint-disable-next-line no-multi-str
  '<div class="myFirstClass myThirdClass">hello</div>\
  <div class="mySecondClass"></div>\
  <div class="myThirdClass">world</div>\
  <div class="myFourthClass"></div>\
  <div class ="myFirstClass">!</div>\
  <div class ="myFifthClass mySixthClass">!</div>\
  <div class="myFirstClass">\
    <div class="myFirstClass"></div>\
    <div class="myThirdClass mySecondClass"></div>\
    <input type="range" min="10" max="125" id="myId"></input>\
    <div class="mySecondClass myThirdClass"></div>\
  </div>'

describe('$getAttribute', () => {
  describe('given a string and an HTMLElement', () => {
    test('which is an attribute present in the HTMLElement, return the attribute', () => {
      document.body.innerHTML = DOC
      const TARGET_ID = document.getElementById('myId')
      const FIRST_TEST = $getAttribute('min', TARGET_ID)
      const SECOND_TEST = $getAttribute('max', TARGET_ID)
      expect(FIRST_TEST).toBe('10')
      expect(SECOND_TEST).toBe('125')
    })

    test('which is an attribute not present in the HTMLElement, return NULL', () => {
      document.body.innerHTML = DOC
      const TARGET_ID = document.getElementById('myId')
      const TEST = $getAttribute('step', TARGET_ID)
      expect(TEST).toBeNull()
    })
  })
})

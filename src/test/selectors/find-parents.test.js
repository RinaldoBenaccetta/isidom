import { $findParent } from '../../index'
import '@testing-library/jest-dom'

document.body.innerHTML =
  // eslint-disable-next-line no-multi-str
  '<div class="myFirstClass myThirdClass">hello</div>\
  <div class="mySecondClass"></div>\
  <div class="myThirdClass">world</div>\
  <span class="myFourthClass"></span>\
  <p class ="myFirstClass">!</p>\
  <div class ="myFifthClass mySixthClass">!</div>\
  <div name="findMe" class="myFirstClass" id="myId">\
    <div class="myFirstClass"></div>\
    <div class="myFirstClass myThirdClass" id="mySecondId"></div>\
    <div class="myThirdClass mySecondClass"></div>\
    <div class="mySecondClass myThirdClass"></div>\
  </div>\
  <div name="it is not me">\
    <div class="myFirstClass myThirdClass" id="sadId"></div>\
  </div>'

describe('$findParent', () => {
  describe('given an HTMLElement', () => {
    test('Which is in DOM return the parent HTMLElement', () => {
      const TARGET_ID = document.getElementById('mySecondId')
      const PARENT = $findParent(TARGET_ID)
      const IS_HTML_ELEMENT = PARENT instanceof HTMLElement
      expect(IS_HTML_ELEMENT).toBeTruthy()
      expect(PARENT).toHaveAttribute('name', 'findMe')
      expect(PARENT).not.toHaveAttribute('name', 'it is not me')
    })
  })
})

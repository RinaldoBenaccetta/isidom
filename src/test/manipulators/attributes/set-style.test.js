import { $setStyle } from '../../../index'
import '@testing-library/jest-dom'

const DOC =
  // eslint-disable-next-line no-multi-str
  '<div name="Sarah Connor" class="myFirstClass myThirdClass">hello</div>\
  <div class="mySecondClass"></div>\
  <div class="myThirdClass">world</div>\
  <div class="myFourthClass"></div>\
  <div class ="myFirstClass">!</div>\
  <div class ="myFifthClass mySixthClass">!</div>\
  <div class="myFirstClass">\
    <div class="myFirstClass"></div>\
    <div class="myThirdClass mySecondClass" id="myId"></div>\
    <div class="mySecondClass myThirdClass" id="mySecondId" style="color:blue;"></div>\
  </div>'

describe('setStyle', () => {
  describe('given a value, a style property and an HTMLElement', () => {
    test('Which have not style yet, add style to the HTMLElement', () => {
      document.body.innerHTML = DOC
      const TARGET_ID = document.getElementById('myId')
      $setStyle('red', 'backgroundColor', TARGET_ID)
      expect(TARGET_ID).toHaveStyle({ backgroundColor: 'red' })
    })

    test('Which already have the specified style filled, replace style of the HTMLElement', () => {
      document.body.innerHTML = DOC
      const TARGET_ID = document.getElementById('mySecondId')
      $setStyle('red', 'color', TARGET_ID)
      expect(TARGET_ID).toHaveStyle({ color: 'red' })
    })
  })
})

import { $removeStyle } from '../../../index'
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
    <div class="myThirdClass mySecondClass" id="myId" style="background-color:red;"></div>\
    <div class="mySecondClass myThirdClass" id="mySecondId" style="color:blue;"></div>\
    <div class="myFirstClass" id="myThirdId"></div>\
  </div>'

describe('$removeStyle', () => {
  describe('given a style property and an HTMLElement', () => {
    test('which have the style, remove the style', () => {
      document.body.innerHTML = DOC
      const TARGET_ID = document.getElementById('myId')
      $removeStyle('background-color', TARGET_ID)
      expect(TARGET_ID).not.toHaveStyle({ backgroundColor: 'red' })
    })

    test('which have not the style, do nothing', () => {
      document.body.innerHTML = DOC
      const TARGET_ID = document.getElementById('myId')
      $removeStyle('color', TARGET_ID)
      expect(TARGET_ID).not.toHaveStyle({ color: 'red' })
    })
  })
})

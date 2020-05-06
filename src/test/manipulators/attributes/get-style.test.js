import { $getStyle } from '../../../index'
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
    <div class="myFirdClass mySecondClass" id="myId" style="background-color:red;"></div>\
    <div class="mySecondClass myThirdClass" id="mySecondId" style="color:blue;"></div>\
    <div class="myFirstClass" id="myFirdId"></div>\
  </div>'

describe('$getStyle', () => {
  describe('given a style property and an HTMLElement', () => {
    test('wich have style, return the style', () => {
      document.body.innerHTML = DOC
      const TARGET_ID = document.getElementById('myId')
      const TEST = $getStyle('backgroundColor', TARGET_ID)
      expect(TEST).toBe('red')
    })

    test('wich have no style, return empty string', () => {
      document.body.innerHTML = DOC
      const TARGET_ID = document.getElementById('myFirdId')
      const TEST = $getStyle('backgroundColor', TARGET_ID)
      expect(TEST).toBe('')
    })

    test('wich the style have be programatically changed, return the new style', () => {
      document.body.innerHTML = DOC
      const TARGET_ID = document.getElementById('mySecondId')
      TARGET_ID.style.backgroundColor = 'yellow'
      const TEST = $getStyle('backgroundColor', TARGET_ID)
      expect(TEST).toBe('yellow')
    })
  })
})

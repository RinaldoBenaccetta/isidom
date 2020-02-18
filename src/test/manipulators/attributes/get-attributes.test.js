import { $getAttributes } from '../../../lib/manipulators/attributes/get-attributes'
import '@testing-library/jest-dom'

const DOC =
  // eslint-disable-next-line no-multi-str
  '<div class="myFirstClass myFirdClass">hello</div>\
  <div class="mySecondClass"></div>\
  <div class="myFirdClass">world</div>\
  <div class="myFourthClass"></div>\
  <div class ="myFirstClass">!</div>\
  <div class ="myFifthClass mySixthClass">!</div>\
  <div class="myFirstClass">\
    <div class="myFirstClass"></div>\
    <div class="myFirdClass mySecondClass"></div>\
    <input type="range" min="10" max="125" id="myId"></input>\
    <div class="mySecondClass myThirdClass"></div>\
  </div>'

describe('$getAttributes', () => {
  describe('given an HTMLElement', () => {
    test('wich is a valid HTMLElement return an object with all the attributes of the HTMLElement', () => {
      document.body.innerHTML = DOC
      const TARGET_ID = document.getElementById('myId')
      const ATTRIBUTES = $getAttributes(TARGET_ID)
      expect(ATTRIBUTES.min).toBe('10')
      expect(ATTRIBUTES.id).toBe('myId')
      expect(ATTRIBUTES.max).toBe('125')
      expect(ATTRIBUTES.type).toBe('range')
      expect(ATTRIBUTES instanceof Object).toBeTruthy()
    })
  })
})

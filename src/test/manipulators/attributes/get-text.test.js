import { $getText } from '../../../manipulators/attributes/get-text'
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
    <div class="myFirdClass mySecondClass" id="myId">Hello world!</div>\
    <div class="mySecondClass myThirdClass" id="mySecondId"></div>\
  </div>'

describe('$getText', () => {
  describe('given an HTMLElement that exist', () => {
    test('return the text of the HTMLElement', () => {
      document.body.innerHTML = DOC
      const TARGET_ID = document.getElementById('myId')
      console.log(TARGET_ID)
      const TEST = $getText(TARGET_ID)
      expect(TEST).toBe('Hello world!')
    })
  })

  describe('given an HTMLElement that exist and programmatically change the text before test', () => {
    test('return the new text of the input', () => {
      document.body.innerHTML = DOC
      const TARGET_ID = document.getElementById('myId')
      TARGET_ID.textContent = 'My new text'
      const TEST = $getText(TARGET_ID)
      expect(TEST).toBe('My new text')
    })
  })

  describe('given an HTMLElement that exist and with no text', () => {
    test('return an empty string', () => {
      document.body.innerHTML = DOC
      const TARGET_ID = document.getElementById('mySecondId')
      const TEST = $getText(TARGET_ID)
      expect(TEST).toBe('')
    })
  })
})

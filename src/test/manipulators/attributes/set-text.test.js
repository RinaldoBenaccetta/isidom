import { $setText } from '../../../index'
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
    <div class="myThirdClass mySecondClass" id="mySecondId">Hello world!</div>\
    <div class="mySecondClass myThirdClass"></div>\
  </div>'

describe('$setText', () => {
  describe('given a string and an HTMLElement', () => {
    test('set a new text for the HTMLElement', () => {
      document.body.innerHTML = DOC
      const TARGET_ID = document.getElementById('myId')
      $setText('It is a nice place!', TARGET_ID)
      expect(TARGET_ID).toHaveTextContent(/^It is a nice place!$/)
    })

    test('Which already have text, set a new text for the HTMLElement', () => {
      document.body.innerHTML = DOC
      const TARGET_ID = document.getElementById('mySecondId')
      $setText('I take your place!', TARGET_ID)
      expect(TARGET_ID).toHaveTextContent(/^I take your place!$/)
    })
  })
})

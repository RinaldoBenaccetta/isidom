import { $setValue } from '../../../index'
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
    <input type="text" id="myId" value="John Doe"><br><br>\
    <input type="text" id="mySecondId"><br><br>\
    <div class="mySecondClass myThirdClass"></div>\
  </div>'

describe('$setValue', () => {
  describe('given an HTMLElement that is a valid input', () => {
    test('wich already have a value, set the value of the input', () => {
      document.body.innerHTML = DOC
      const TARGET_ID = document.getElementById('myId')
      $setValue('Sarah Connor', TARGET_ID)
      expect(TARGET_ID).toHaveValue('Sarah Connor')
    })
  })

  describe('wich have not value, set the value of the input', () => {
    test('wich have no value, return the new value of the input', () => {
      document.body.innerHTML = DOC
      const TARGET_ID = document.getElementById('mySecondId')
      $setValue('Sarah Connor', TARGET_ID)
      expect(TARGET_ID).toHaveValue('Sarah Connor')
    })
  })
})

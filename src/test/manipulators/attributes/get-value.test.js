import { $getValue } from '../../../lib/manipulators/attributes/get-value'
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
    <input type="text" id="myId" value="John"><br><br>\
    <input type="text" id="mySecondId" value="Doe"><br><br>\
    <input type="number" id="myThirdId" ><br><br>\
    <div class="mySecondClass myThirdClass"></div>\
  </div>'

describe('$getValue', () => {
  describe('given an HTMLElement that is a valid input', () => {
    test('return the value of the input', () => {
      document.body.innerHTML = DOC
      const TARGET_ID = document.getElementById('myId')
      const SECOND_TARGET_ID = document.getElementById('mySecondId')
      expect($getValue(TARGET_ID)).toBe('John')
      expect($getValue(SECOND_TARGET_ID)).toBe('Doe')
    })
  })

  describe('given an HTMLElement that is a valid input and programmatically change the value before', () => {
    test('return the new value of the input', () => {
      document.body.innerHTML = DOC
      const TARGET_ID = document.getElementById('myId')
      const SECOND_TARGET_ID = document.getElementById('mySecondId')
      TARGET_ID.value = 'Sarah'
      SECOND_TARGET_ID.value = 'Connor'
      expect($getValue(TARGET_ID)).toBe('Sarah')
      expect($getValue(SECOND_TARGET_ID)).toBe('Connor')
    })
  })

  describe('given an HTMLElement that is a valid input without value', () => {
    test('return an empty string', () => {
      document.body.innerHTML = DOC
      const TARGET_ID = document.getElementById('myThirdId')
      expect($getValue(TARGET_ID)).toBe('')
    })
  })
})

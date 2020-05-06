import { $replaceClass } from '../../../index'
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
    <div class="iLeaveClass mySecondClass imHereClass" id="myId"></div>\
    <div class="mySecondClass myThirdClass"></div>\
  </div>'

describe('$replaceClass', () => {
  describe('given two strings and an HTMLElement', () => {
    test('wich is an old valid class present in the HTMLElement and an new valid class, replace the old class by the new class in the HTMLElement', () => {
      document.body.innerHTML = DOC
      const TARGET_ID = document.getElementById('myId')
      $replaceClass('iLeaveClass', 'theNewClass', TARGET_ID)
      expect(TARGET_ID).toHaveClass('theNewClass')
      expect(TARGET_ID).not.toHaveClass('iLeaveClass')
    })

    test('wich is an old valid class not present in the HTMLElement and an new valid class, do nothing', () => {
      document.body.innerHTML = DOC
      const TARGET_ID = document.getElementById('myId')
      $replaceClass('notHereClass', 'theNewClass', TARGET_ID)
      expect(TARGET_ID).not.toHaveClass('theNewClass')
      expect(TARGET_ID).not.toHaveClass('notHereClass')
    })
  })

  describe('given two strings with dot at start and an HTMLElement', () => {
    test('wich is an old valid class present in the HTMLElement and an new valid class, replace the old class by the new class in the HTMLElement', () => {
      document.body.innerHTML = DOC
      const TARGET_ID = document.getElementById('myId')
      $replaceClass('.iLeaveClass', '.theNewClass', TARGET_ID)
      expect(TARGET_ID).toHaveClass('theNewClass')
      expect(TARGET_ID).not.toHaveClass('iLeaveClass')
    })

    test('wich is an old valid class not present in the HTMLElement and an new valid class, do nothing', () => {
      document.body.innerHTML = DOC
      const TARGET_ID = document.getElementById('myId')
      $replaceClass('.notHereClass', '.theNewClass', TARGET_ID)
      expect(TARGET_ID).not.toHaveClass('theNewClass')
      expect(TARGET_ID).not.toHaveClass('notHereClass')
    })
  })

  describe('given two strings with spaces at start and end an HTMLElement', () => {
    test('wich is an old valid class present in the HTMLElement and an new valid class, replace the old class by the new class in the HTMLElement', () => {
      document.body.innerHTML = DOC
      const TARGET_ID = document.getElementById('myId')
      $replaceClass('     iLeaveClass ', '   theNewClass ', TARGET_ID)
      expect(TARGET_ID).toHaveClass('theNewClass')
      expect(TARGET_ID).not.toHaveClass('iLeaveClass')
    })

    test('wich is an old valid class not present in the HTMLElement and an new valid class, do nothing', () => {
      document.body.innerHTML = DOC
      const TARGET_ID = document.getElementById('myId')
      $replaceClass('      notHereClass ', ' theNewClass  ', TARGET_ID)
      expect(TARGET_ID).not.toHaveClass('theNewClass')
      expect(TARGET_ID).not.toHaveClass('notHereClass')
    })
  })
})

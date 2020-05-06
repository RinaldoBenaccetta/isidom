import { $removeClass } from '../../../index'
import '@testing-library/jest-dom'

document.body.innerHTML =
  // eslint-disable-next-line no-multi-str
  '<div class="myFirstClass myThirdClass wantToGoClass">hello</div>\
  <div class="mySecondClass"></div>\
  <div class="myThirdClass">world</div>\
  <div class="myFourthClass"></div>\
  <div class ="myFirstClass">!</div>\
  <div class ="myFifthClass mySixthClass">!</div>\
  <div class="myFirstClass">\
    <div class="myFirstClass"></div>\
    <div class="myThirdClass mySecondClass"></div>\
    <div class="myFirstClass wantToGoClass killMeClass wantToGoClassBestFriend iStayClass" id="myId"></div>\
    <div class="mySecondClass myThirdClass"></div>\
  </div>'

describe('$removeClass', () => {
  describe('given a string and an HTMLElement', () => {
    const TARGET_ID = document.getElementById('myId')
    test('Which is a valid class, remove the class from the HTMLElement', () => {
      $removeClass('wantToGoClass', TARGET_ID)
      expect(TARGET_ID).toHaveClass('killMeClass')
      expect(TARGET_ID).toHaveClass('wantToGoClassBestFriend')
      expect(TARGET_ID).not.toHaveClass('wantToGoClass')
    })

    test('Which is a valid class with dot at start, remove the class from the HTMLElement', () => {
      $removeClass('.wantToGoClass', TARGET_ID)
      expect(TARGET_ID).toHaveClass('killMeClass')
      expect(TARGET_ID).toHaveClass('wantToGoClassBestFriend')
      expect(TARGET_ID).not.toHaveClass('wantToGoClass')
    })

    test('Which is a valid class with spaces at start and end, remove the class from the HTMLElement', () => {
      $removeClass('   wantToGoClass     ', TARGET_ID)
      expect(TARGET_ID).toHaveClass('killMeClass')
      expect(TARGET_ID).toHaveClass('wantToGoClassBestFriend')
      expect(TARGET_ID).not.toHaveClass('wantToGoClass')
    })
  })

  describe('given an array of strings and an HTMLElement', () => {
    const TARGET_ID = document.getElementById('myId')
    test('Which is an array of valid classes, remove the class from the HTMLElement', () => {
      $removeClass(
        ['wantToGoClass', 'wantToGoClassBestFriend', 'killMeClass'],
        TARGET_ID
      )
      expect(TARGET_ID).not.toHaveClass('wantToGoClass')
      expect(TARGET_ID).not.toHaveClass('wantToGoClassBestFriend')
      expect(TARGET_ID).not.toHaveClass('killMeClass')
      expect(TARGET_ID).toHaveClass('iStayClass')
    })
  })

  describe('given a string and a nodeList', () => {
    const TARGET_ELEMENTS = document.querySelectorAll('.myFirstClass')
    test('Which is a valid class, remove the class from the HTMLElement of the HTMLCollection', () => {
      $removeClass('wantToGoClass', TARGET_ELEMENTS)
      expect(TARGET_ELEMENTS.length).toBe(5)
      expect(TARGET_ELEMENTS[0]).not.toHaveClass('wantToGoClass')
      expect(TARGET_ELEMENTS[4]).not.toHaveClass('wantToGoClass')
      expect(TARGET_ELEMENTS[0]).toHaveClass('myFirstClass')
      expect(TARGET_ELEMENTS[4]).toHaveClass('myFirstClass')
    })
  })

  describe('given a string and an HTMLCollection', () => {
    const TARGET_ELEMENTS = document.getElementsByClassName('myFirstClass')
    test('Which is a valid class, remove the class from the HTMLElement of the HTMLCollection', () => {
      $removeClass('wantToGoClass', TARGET_ELEMENTS)
      expect(TARGET_ELEMENTS.length).toBe(5)
      expect(TARGET_ELEMENTS[0]).not.toHaveClass('wantToGoClass')
      expect(TARGET_ELEMENTS[4]).not.toHaveClass('wantToGoClass')
      expect(TARGET_ELEMENTS[0]).toHaveClass('myFirstClass')
      expect(TARGET_ELEMENTS[4]).toHaveClass('myFirstClass')
    })
  })

  describe('given an array of strings and an HTMLCollection', () => {
    const TARGET_ELEMENTS = document.getElementsByClassName('myFirstClass')
    test('Which is a valid class, remove the class from the HTMLElement of the HTMLCollection', () => {
      $removeClass(
        ['wantToGoClass', 'wantToGoClassBestFriend', 'killMeClass'],
        TARGET_ELEMENTS
      )
      expect(TARGET_ELEMENTS.length).toBe(5)
      expect(TARGET_ELEMENTS[4]).toHaveClass('iStayClass')
      expect(TARGET_ELEMENTS[4]).toHaveClass('myFirstClass')
      expect(TARGET_ELEMENTS[0]).not.toHaveClass('wantToGoClass')
      expect(TARGET_ELEMENTS[4]).not.toHaveClass('wantToGoClass')
      expect(TARGET_ELEMENTS[4]).not.toHaveClass('wantToGoClassBestFriend')
      expect(TARGET_ELEMENTS[4]).not.toHaveClass('killMeClass')
    })
  })

  describe('given an array of strings and a nodeList', () => {
    const TARGET_ELEMENTS = document.querySelectorAll('.myFirstClass')
    test('Which is a valid class, remove the class from the HTMLElement of the nodeList', () => {
      $removeClass(
        ['wantToGoClass', 'wantToGoClassBestFriend', 'killMeClass'],
        TARGET_ELEMENTS
      )
      expect(TARGET_ELEMENTS.length).toBe(5)
      expect(TARGET_ELEMENTS[4]).toHaveClass('iStayClass')
      expect(TARGET_ELEMENTS[4]).toHaveClass('myFirstClass')
      expect(TARGET_ELEMENTS[0]).not.toHaveClass('wantToGoClass')
      expect(TARGET_ELEMENTS[4]).not.toHaveClass('wantToGoClass')
      expect(TARGET_ELEMENTS[4]).not.toHaveClass('wantToGoClassBestFriend')
      expect(TARGET_ELEMENTS[4]).not.toHaveClass('killMeClass')
    })
  })
})

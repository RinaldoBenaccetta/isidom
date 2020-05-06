import { $toggleClass } from '../../../index'
import '@testing-library/jest-dom'

const DOC =
  // eslint-disable-next-line no-multi-str
  '<div class="myFirstClass myThirdClass">hello</div>\
  <div class="mySecondClass"></div>\
  <div class="myThirdClass">world</div>\
  <div class="myFourthClass"></div>\
  <div class ="myFirstClass">!</div>\
  <div class ="myFifthClass mySixthClass">!</div>\
  <div class="myFirstClass"></div>\
  <div class="myFirstClass myThirdClass myNewClass"></div>\
  <div class="myThirdClass mySecondClass"></div>\
  <div class="myBeautifulClass mySecondClass myNewClass"></div>\
  <div class="myBeautifulClass mySecondClass"></div>\
  <p class="myFirstClass mySecondClass imHereClass anOtherClass" id="myId"></p>\
  <div class="myFirstClass mySecondClass imHereClass myNewClass" id="mySecondId"></div>\
  <div class="mySecondClass myThirdClass"></div>'

describe('$toggleClass', () => {
  describe('given a string and an HTMLElement', () => {
    test('Which is a valid class, toggle the class to the HTMLElement', () => {
      document.body.innerHTML = DOC
      const FIRST_TARGET_ID = document.getElementById('myId')
      const SECOND_TARGET_ID = document.getElementById('mySecondId')
      $toggleClass('myNewClass', FIRST_TARGET_ID)
      $toggleClass('myNewClass', SECOND_TARGET_ID)
      expect(FIRST_TARGET_ID).toHaveClass('myNewClass')
      expect(SECOND_TARGET_ID).not.toHaveClass('myNewClass')
    })

    test('Which is a valid class with dot at start, toggle the class to the HTMLElement', () => {
      document.body.innerHTML = DOC
      const FIRST_TARGET_ID = document.getElementById('myId')
      const SECOND_TARGET_ID = document.getElementById('mySecondId')
      $toggleClass('.myNewClass', FIRST_TARGET_ID)
      $toggleClass('.myNewClass', SECOND_TARGET_ID)
      expect(FIRST_TARGET_ID).toHaveClass('myNewClass')
      expect(SECOND_TARGET_ID).not.toHaveClass('myNewClass')
    })

    test('Which is a valid class with spaces at start and end, toggle the class to the HTMLElement', () => {
      document.body.innerHTML = DOC
      const FIRST_TARGET_ID = document.getElementById('myId')
      const SECOND_TARGET_ID = document.getElementById('mySecondId')
      $toggleClass('   myNewClass  ', FIRST_TARGET_ID)
      $toggleClass(' myNewClass   ', SECOND_TARGET_ID)
      expect(FIRST_TARGET_ID).toHaveClass('myNewClass')
      expect(SECOND_TARGET_ID).not.toHaveClass('myNewClass')
    })
  })

  describe('given an array of strings and an HTMLElement', () => {
    document.body.innerHTML = DOC
    const TARGET_ID = document.getElementById('myId')
    test('Which is an array of valid classes, toggle the class to the HTMLElement', () => {
      $toggleClass(['myNewClass', 'myFirstClass', 'mySecondClass'], TARGET_ID)
      expect(TARGET_ID).toHaveClass('myNewClass')
      expect(TARGET_ID).not.toHaveClass('myFirstClass')
      expect(TARGET_ID).not.toHaveClass('mySecondClass')
    })
  })

  describe('given a string and a nodeList', () => {
    document.body.innerHTML = DOC
    const NODE_LIST = document.querySelectorAll('.myThirdClass')
    test('Which is a valid class, toggle the class of all the HTMLElement from the nodeList', () => {
      $toggleClass('myNewClass', NODE_LIST)
      expect(NODE_LIST.length).toBe(5)
      expect(NODE_LIST[2]).not.toHaveClass('myNewClass')
      expect(NODE_LIST[1]).toHaveClass('myNewClass')
    })
  })

  describe('given an array of string and a nodeList', () => {
    document.body.innerHTML = DOC
    const NODE_LIST = document.querySelectorAll('.myThirdClass')
    test('Which is an array containing valid class, toggle the class of all the HTMLElement from the nodeList', () => {
      $toggleClass(['myNewClass', 'myNiceClass'], NODE_LIST)
      expect(NODE_LIST.length).toBe(5)
      expect(NODE_LIST[2]).not.toHaveClass('myNewClass')
      expect(NODE_LIST[1]).toHaveClass('myNiceClass')
      expect(NODE_LIST[1]).toHaveClass('myNewClass')
      expect(NODE_LIST[1]).toHaveClass('myNiceClass')
    })
  })

  describe('given a string and an HTMLCollection', () => {
    document.body.innerHTML = DOC
    const HTML_COLLECTION = document.getElementsByClassName('myThirdClass')
    test('Which is a valid class, toggle the class of all the HTMLElement from the HTMLCollection', () => {
      $toggleClass('myNewClass', HTML_COLLECTION)
      expect(HTML_COLLECTION.length).toBe(5)
      expect(HTML_COLLECTION[2]).not.toHaveClass('myNewClass')
      expect(HTML_COLLECTION[1]).toHaveClass('myNewClass')
    })
  })

  describe('given an array of string and an HTMLCollection', () => {
    document.body.innerHTML = DOC
    const HTML_COLLECTION = document.getElementsByClassName('myBeautifulClass')
    test('Which is an array containing valid class, toggle the class of all the HTMLElement from the HTMLCollection', () => {
      $toggleClass(['myNewClass', 'myNiceClass'], HTML_COLLECTION)
      expect(HTML_COLLECTION.length).toBe(2)
      expect(HTML_COLLECTION[0]).not.toHaveClass('myNewClass')
      expect(HTML_COLLECTION[1]).toHaveClass('myNiceClass')
      expect(HTML_COLLECTION[1]).toHaveClass('myNewClass')
      expect(HTML_COLLECTION[1]).toHaveClass('myNiceClass')
    })
  })
})

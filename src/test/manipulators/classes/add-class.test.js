import { $addClass } from '../../../manipulators/classes/add-class'
import '@testing-library/jest-dom'

document.body.innerHTML =
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
    <div class="myFirstClass mySecondClass imHereClass" id="myId"></div>\
    <div class="mySecondClass myThirdClass"></div>\
  </div>'

describe('$addClass', () => {
  describe('given a string and an HTMLElement', () => {
    const TARGET_ID = document.getElementById('myId')
    test('wich is a valid class, add the class to the HTMLElement', () => {
      $addClass('myNewClass', TARGET_ID)
      expect(TARGET_ID).toHaveClass('myNewClass')
      expect(TARGET_ID).toHaveClass('myFirstClass')
    })

    test('wich is a valid class with dot at start, add the class to the HTMLElement', () => {
      $addClass('.myNewClass', TARGET_ID)
      expect(TARGET_ID).toHaveClass('myNewClass')
      expect(TARGET_ID).toHaveClass('myFirstClass')
    })

    test('wich is a valid class with spaces at start and end, add the class to the HTMLElement', () => {
      $addClass('   myNewClass  ', TARGET_ID)
      expect(TARGET_ID).toHaveClass('myNewClass')
      expect(TARGET_ID).toHaveClass('myFirstClass')
    })
  })

  describe('given an array of strings and an HTMLElement', () => {
    const TARGET_ID = document.getElementById('myId')
    test('wich is an array of valid classes, add the class to the HTMLElement', () => {
      $addClass(['myNewClass', 'anotherClass', 'andAgain'], TARGET_ID)
      expect(TARGET_ID).toHaveClass('myNewClass')
      expect(TARGET_ID).toHaveClass('anotherClass')
      expect(TARGET_ID).toHaveClass('andAgain')
      expect(TARGET_ID).toHaveClass('myFirstClass')
    })
  })

  describe('given a string and a nodeList', () => {
    const TARGET_ELEMENTS = document.querySelectorAll('.myFirstClass')
    test('wich is a valid class, add the class to the HTMLElement of the HTMLCollection', () => {
      $addClass('myNewClass', TARGET_ELEMENTS)
      expect(TARGET_ELEMENTS.length).toBe(5)
      expect(TARGET_ELEMENTS[0]).toHaveClass('myNewClass')
      expect(TARGET_ELEMENTS[1]).toHaveClass('myNewClass')
      expect(TARGET_ELEMENTS[2]).toHaveClass('myNewClass')
      expect(TARGET_ELEMENTS[3]).toHaveClass('myNewClass')
      expect(TARGET_ELEMENTS[4]).toHaveClass('myNewClass')
      expect(TARGET_ELEMENTS[0]).toHaveClass('myFirstClass')
      expect(TARGET_ELEMENTS[0]).not.toHaveClass('mySecondClass')
    })
  })

  describe('given a string and an HTMLCollection', () => {
    const TARGET_ELEMENTS = document.getElementsByClassName('myFirstClass')
    test('wich is a valid class, add the class to the HTMLElement of the HTMLCollection', () => {
      $addClass('myNewClass', TARGET_ELEMENTS)
      expect(TARGET_ELEMENTS.length).toBe(5)
      expect(TARGET_ELEMENTS[0]).toHaveClass('myNewClass')
      expect(TARGET_ELEMENTS[1]).toHaveClass('myNewClass')
      expect(TARGET_ELEMENTS[2]).toHaveClass('myNewClass')
      expect(TARGET_ELEMENTS[3]).toHaveClass('myNewClass')
      expect(TARGET_ELEMENTS[4]).toHaveClass('myNewClass')
      expect(TARGET_ELEMENTS[0]).toHaveClass('myFirstClass')
      expect(TARGET_ELEMENTS[0]).not.toHaveClass('mySecondClass')
    })
  })

  describe('given an array of strings and an HTMLCollection', () => {
    const TARGET_ELEMENTS = document.getElementsByClassName('myFirdClass')
    test('wich is a valid class, add the class to the HTMLElement of the HTMLCollection', () => {
      $addClass(['myNewClass', 'anotherClass', 'andAgain'], TARGET_ELEMENTS)
      expect(TARGET_ELEMENTS.length).toBe(3)
      expect(TARGET_ELEMENTS[0]).toHaveClass('myNewClass')
      expect(TARGET_ELEMENTS[0]).toHaveClass('anotherClass')
      expect(TARGET_ELEMENTS[0]).toHaveClass('andAgain')
      expect(TARGET_ELEMENTS[1]).toHaveClass('myNewClass')
      expect(TARGET_ELEMENTS[1]).toHaveClass('anotherClass')
      expect(TARGET_ELEMENTS[1]).toHaveClass('andAgain')
      expect(TARGET_ELEMENTS[2]).toHaveClass('myNewClass')
      expect(TARGET_ELEMENTS[2]).toHaveClass('anotherClass')
      expect(TARGET_ELEMENTS[2]).toHaveClass('andAgain')
      expect(TARGET_ELEMENTS[0]).toHaveClass('myNewClass')
      expect(TARGET_ELEMENTS[0]).toHaveClass('myFirdClass')
      expect(TARGET_ELEMENTS[0]).not.toHaveClass('mySecondClass')
    })
  })
})

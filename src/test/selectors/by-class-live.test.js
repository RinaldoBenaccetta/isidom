import { $byClassLive } from '../../selectors/by-class-live'
import '@testing-library/jest-dom'

document.body.innerHTML =
  // eslint-disable-next-line no-multi-str
  '<div class="myFirstClass myFirdClass">hello</div>\
  <div class="mySecondClass"></div>\
  <div class="myFirdClass">world</div>\
  <div class="myFourthClass"></div>\
  <div class ="myFirstClass">!</div>\
  <div class ="myFifthClass mySixthClass">!</div>\
  <div class="myFirstClass" id="myId">\
    <div class="myFirstClass"></div>\
    <div class="myFirdClass mySecondClass"></div>\
    <div class="myFirstClass myThirdClass"></div>\
    <div class="mySecondClass myThirdClass"></div>\
  </div>'

describe('$byClassLive', () => {
  describe('given a string', () => {
    test('return an HTMLCollection', () => {
      const COLLECTION = $byClassLive('myFirstClass')
      const TEST_COLLECTION = HTMLCollection.prototype.isPrototypeOf(COLLECTION)
      expect(TEST_COLLECTION).toBeTruthy()
    })

    test('wich appear in the dom return an HTMLCollection containing only elements with this class', () => {
      const COLLECTION = $byClassLive('myFirstClass')
      expect(COLLECTION.length).toBe(5)
      expect(COLLECTION[0]).toHaveClass('myFirstClass')
      expect(COLLECTION[0]).not.toHaveClass('mySecondClass')
      expect(COLLECTION[1]).toHaveClass('myFirstClass')
      expect(COLLECTION[1]).not.toHaveClass('mySecondClass')
    })

    test('containing a dot at start wich appear in the dom return an HTMLCollection containing only elements with this class', () => {
      const COLLECTION = $byClassLive('.myFirstClass')
      expect(COLLECTION.length).toBe(5)
      expect(COLLECTION[0]).toHaveClass('myFirstClass')
      expect(COLLECTION[0]).not.toHaveClass('mySecondClass')
      expect(COLLECTION[1]).toHaveClass('myFirstClass')
      expect(COLLECTION[1]).not.toHaveClass('mySecondClass')
    })

    test('containing spaces at start and end wich appear in the dom return an HTMLCollection containing only elements with this class', () => {
      const COLLECTION = $byClassLive('   myFirstClass ')
      expect(COLLECTION.length).toBe(5)
      expect(COLLECTION[0]).toHaveClass('myFirstClass')
      expect(COLLECTION[0]).not.toHaveClass('mySecondClass')
      expect(COLLECTION[1]).toHaveClass('myFirstClass')
      expect(COLLECTION[1]).not.toHaveClass('mySecondClass')
    })

    test('wich not appear in the document return empty node', () => {
      const COLLECTION = $byClassLive('notHereClass')
      expect(COLLECTION.length).toBe(0)
    })
  })

  describe('given an array of class', () => {
    test('return an HTMLCollection', () => {
      const COLLECTION = $byClassLive(['myFirstClass', 'mySecondClass'])
      const TEST_COLLECTION = HTMLCollection.prototype.isPrototypeOf(COLLECTION)
      expect(TEST_COLLECTION).toBeTruthy()
    })

    test('wich appear in the dom return an HTMLCollection containing only elements with theses classes', () => {
      const COLLECTION = $byClassLive(['myFirstClass', 'myFourthClass'])
      expect(COLLECTION.length).toBe(0)
    })

    test('wich appear in the dom but not match an element return empty HTMLCollection', () => {
      const COLLECTION = $byClassLive(['myFirstClass', 'myFirdClass'])
      expect(COLLECTION.length).toBe(1)
      expect(COLLECTION[0]).toHaveClass('myFirstClass')
      expect(COLLECTION[0]).toHaveClass('myFirdClass')
      expect(COLLECTION[0]).not.toHaveClass('mySecondClass')
    })

    test('containing dot at start and space at start and end wich appear in the dom but not match an element return empty HTMLCollection', () => {
      const COLLECTION = $byClassLive(['.myFirstClass', '   myFirdClass    '])
      expect(COLLECTION.length).toBe(1)
      expect(COLLECTION[0]).toHaveClass('myFirstClass')
      expect(COLLECTION[0]).toHaveClass('myFirdClass')
      expect(COLLECTION[0]).not.toHaveClass('mySecondClass')
    })

    test('wich not appear in the document return empty HTMLCollection', () => {
      const COLLECTION = $byClassLive(['notHereClass', '.farAwayClass'])
      expect(COLLECTION.length).toBe(0)
    })
  })

  describe('given a string and an element', () => {
    test('return an HTMLCollection', () => {
      const TARGET_ID = document.getElementById('myId')
      const COLLECTION = $byClassLive('myFirstClass', TARGET_ID)
      const TEST_COLLECTION = HTMLCollection.prototype.isPrototypeOf(COLLECTION)
      expect(TEST_COLLECTION).toBeTruthy()
    })

    test('wich appear in the dom return an HTMLCollection containing only elements with this class in the element', () => {
      const TARGET_ID = document.getElementById('myId')
      const COLLECTION = $byClassLive('myFirstClass', TARGET_ID)
      expect(COLLECTION.length).toBe(2)
      expect(COLLECTION[0]).toHaveClass('myFirstClass')
      expect(COLLECTION[0]).not.toHaveClass('mySecondClass')
      expect(COLLECTION[1]).toHaveClass('myFirstClass')
      expect(COLLECTION[1]).not.toHaveClass('mySecondClass')
    })

    test('containig dot at start wich appear in the dom return an HTMLCollection containing only elements with this class in the element', () => {
      const TARGET_ID = document.getElementById('myId')
      const COLLECTION = $byClassLive('.myFirstClass', TARGET_ID)
      expect(COLLECTION.length).toBe(2)
      expect(COLLECTION[0]).toHaveClass('myFirstClass')
      expect(COLLECTION[0]).not.toHaveClass('mySecondClass')
      expect(COLLECTION[1]).toHaveClass('myFirstClass')
      expect(COLLECTION[1]).not.toHaveClass('mySecondClass')
    })

    test('containing spaces at start and end wich appear in the dom return an HTMLCollection containing only elements with this class in the element', () => {
      const TARGET_ID = document.getElementById('myId')
      const COLLECTION = $byClassLive('  myFirstClass    ', TARGET_ID)
      expect(COLLECTION.length).toBe(2)
      expect(COLLECTION[0]).toHaveClass('myFirstClass')
      expect(COLLECTION[0]).not.toHaveClass('mySecondClass')
      expect(COLLECTION[1]).toHaveClass('myFirstClass')
      expect(COLLECTION[1]).not.toHaveClass('mySecondClass')
    })

    test('wich not appear in the element return empty HTMLCollection', () => {
      const TARGET_ID = document.getElementById('myId')
      const COLLECTION = $byClassLive('myFourthClass', TARGET_ID)
      expect(COLLECTION.length).toBe(0)
    })
  })

  describe('given an array of class and an element', () => {
    test('return an HTMLCollection', () => {
      const TARGET_ID = document.getElementById('myId')
      const COLLECTION = $byClassLive(
        ['myFirstClass', 'mySecondClass'],
        TARGET_ID
      )
      const TEST_COLLECTION = HTMLCollection.prototype.isPrototypeOf(COLLECTION)
      expect(TEST_COLLECTION).toBeTruthy()
    })

    test('wich appear in the dom return an HTMLCollection containing only elements with theses classes in the element', () => {
      const TARGET_ID = document.getElementById('myId')
      const COLLECTION = $byClassLive(
        ['mySecondClass', 'myThirdClass'],
        TARGET_ID
      )
      expect(COLLECTION.length).toBe(1)
      expect(COLLECTION[0]).toHaveClass('mySecondClass')
      expect(COLLECTION[0]).toHaveClass('myThirdClass')
    })

    test('wich appear in the dom but not match an element in the element return empty HTMLCollection', () => {
      const TARGET_ID = document.getElementById('myId')
      const COLLECTION = $byClassLive(
        ['myFirstClass', 'myFourthClass'],
        TARGET_ID
      )
      expect(COLLECTION.length).toBe(0)
    })

    test('containing dot at start and space at start and end wich appear in the dom return an HTMLCollection containing only elements with theses classes in the element', () => {
      const TARGET_ID = document.getElementById('myId')
      const COLLECTION = $byClassLive(
        ['.mySecondClass', '   myThirdClass   '],
        TARGET_ID
      )
      expect(COLLECTION.length).toBe(1)
      expect(COLLECTION[0]).toHaveClass('mySecondClass')
      expect(COLLECTION[0]).toHaveClass('myThirdClass')
    })

    test('wich not appear in the element return empty HTMLCollection', () => {
      const TARGET_ID = document.getElementById('myId')
      const COLLECTION = $byClassLive(
        ['myFifthClass', '.mySixthClass'],
        TARGET_ID
      )
      expect(COLLECTION.length).toBe(0)
    })
  })
})

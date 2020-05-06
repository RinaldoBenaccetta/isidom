import { $byClass } from '../../index'
import '@testing-library/jest-dom'

document.body.innerHTML =
  // eslint-disable-next-line no-multi-str
  '<div class="myFirstClass myThirdClass">hello</div>\
  <div class="mySecondClass"></div>\
  <div class="myThirdClass">world</div>\
  <div class="myFourthClass"></div>\
  <div class ="myFirstClass">!</div>\
  <div class ="myFifthClass mySixthClass">!</div>\
  <div class="myFirstClass" id="myId">\
    <div class="myFirstClass"></div>\
    <div class="myThirdClass mySecondClass"></div>\
    <div class="myFirstClass myThirdClass"></div>\
    <div class="mySecondClass myThirdClass"></div>\
  </div>'

describe('$byClass', () => {
  describe('given a string', () => {
    test('return a nodeList', () => {
      const NODE_LIST = $byClass('myFirstClass')
      const TEST_NODE = NodeList.prototype.isPrototypeOf(NODE_LIST)
      expect(TEST_NODE).toBeTruthy()
    })

    test('Which appear in the dom return a nodeList containing only elements with this class', () => {
      const NODE_LIST = $byClass('myFirstClass')
      expect(NODE_LIST.length).toBe(5)
      expect(NODE_LIST[0]).toHaveClass('myFirstClass')
      expect(NODE_LIST[0]).not.toHaveClass('mySecondClass')
      expect(NODE_LIST[1]).toHaveClass('myFirstClass')
      expect(NODE_LIST[1]).not.toHaveClass('mySecondClass')
    })

    test('containing a dot at start Which appear in the dom return a nodeList containing only elements with this class', () => {
      const NODE_LIST = $byClass('.myFirstClass')
      expect(NODE_LIST.length).toBe(5)
      expect(NODE_LIST[0]).toHaveClass('myFirstClass')
      expect(NODE_LIST[0]).not.toHaveClass('mySecondClass')
      expect(NODE_LIST[1]).toHaveClass('myFirstClass')
      expect(NODE_LIST[1]).not.toHaveClass('mySecondClass')
    })

    test('containing spaces at start and end Which appear in the dom return a nodeList containing only elements with this class', () => {
      const NODE_LIST = $byClass('   myFirstClass ')
      expect(NODE_LIST.length).toBe(5)
      expect(NODE_LIST[0]).toHaveClass('myFirstClass')
      expect(NODE_LIST[0]).not.toHaveClass('mySecondClass')
      expect(NODE_LIST[1]).toHaveClass('myFirstClass')
      expect(NODE_LIST[1]).not.toHaveClass('mySecondClass')
    })

    test('Which not appear in the document return empty node', () => {
      const NODE_LIST = $byClass('notHereClass')
      expect(NODE_LIST.length).toBe(0)
    })
  })

  describe('given an array of class', () => {
    test('return a nodeList', () => {
      const NODE_LIST = $byClass(['myFirstClass', 'mySecondClass'])
      const TEST_NODE = NodeList.prototype.isPrototypeOf(NODE_LIST)
      expect(TEST_NODE).toBeTruthy()
    })

    test('Which appear in the dom return a nodeList containing only elements with theses classes', () => {
      const NODE_LIST = $byClass(['myFirstClass', 'myFourthClass'])
      expect(NODE_LIST.length).toBe(0)
    })

    test('Which appear in the dom but not match an element return empty nodeList', () => {
      const NODE_LIST = $byClass(['myFirstClass', 'myThirdClass'])
      expect(NODE_LIST.length).toBe(2)
      expect(NODE_LIST[0]).toHaveClass('myFirstClass')
      expect(NODE_LIST[0]).toHaveClass('myThirdClass')
      expect(NODE_LIST[0]).not.toHaveClass('mySecondClass')
    })

    test('containing dot at start and space at start and end Which appear in the dom but not match an element return empty nodeList', () => {
      const NODE_LIST = $byClass(['.myFirstClass', '   myThirdClass    '])
      expect(NODE_LIST.length).toBe(2)
      expect(NODE_LIST[0]).toHaveClass('myFirstClass')
      expect(NODE_LIST[0]).toHaveClass('myThirdClass')
      expect(NODE_LIST[0]).not.toHaveClass('mySecondClass')
    })

    test('Which not appear in the document return empty nodeList', () => {
      const NODE_LIST = $byClass(['notHereClass', '.farAwayClass'])
      expect(NODE_LIST.length).toBe(0)
    })
  })

  describe('given a string and an element', () => {
    test('return a nodeList', () => {
      const TARGET_ID = document.getElementById('myId')
      const NODE_LIST = $byClass('myFirstClass', TARGET_ID)
      const TEST_NODE = NodeList.prototype.isPrototypeOf(NODE_LIST)
      expect(TEST_NODE).toBeTruthy()
    })

    test('Which appear in the dom return a nodeList containing only elements with this class in the element', () => {
      const TARGET_ID = document.getElementById('myId')
      const NODE_LIST = $byClass('myFirstClass', TARGET_ID)
      expect(NODE_LIST.length).toBe(2)
      expect(NODE_LIST[0]).toHaveClass('myFirstClass')
      expect(NODE_LIST[0]).not.toHaveClass('mySecondClass')
      expect(NODE_LIST[1]).toHaveClass('myFirstClass')
      expect(NODE_LIST[1]).not.toHaveClass('mySecondClass')
    })

    test('containig dot at start Which appear in the dom return a nodeList containing only elements with this class in the element', () => {
      const TARGET_ID = document.getElementById('myId')
      const NODE_LIST = $byClass('.myFirstClass', TARGET_ID)
      expect(NODE_LIST.length).toBe(2)
      expect(NODE_LIST[0]).toHaveClass('myFirstClass')
      expect(NODE_LIST[0]).not.toHaveClass('mySecondClass')
      expect(NODE_LIST[1]).toHaveClass('myFirstClass')
      expect(NODE_LIST[1]).not.toHaveClass('mySecondClass')
    })

    test('containing spaces at start and end Which appear in the dom return a nodeList containing only elements with this class in the element', () => {
      const TARGET_ID = document.getElementById('myId')
      const NODE_LIST = $byClass('  myFirstClass    ', TARGET_ID)
      expect(NODE_LIST.length).toBe(2)
      expect(NODE_LIST[0]).toHaveClass('myFirstClass')
      expect(NODE_LIST[0]).not.toHaveClass('mySecondClass')
      expect(NODE_LIST[1]).toHaveClass('myFirstClass')
      expect(NODE_LIST[1]).not.toHaveClass('mySecondClass')
    })

    test('Which not appear in the element return empty nodeList', () => {
      const TARGET_ID = document.getElementById('myId')
      const NODE_LIST = $byClass('myFourthClass', TARGET_ID)
      expect(NODE_LIST.length).toBe(0)
    })
  })

  describe('given an array of class and an element', () => {
    test('return a nodeList', () => {
      const TARGET_ID = document.getElementById('myId')
      const NODE_LIST = $byClass(['myFirstClass', 'mySecondClass'], TARGET_ID)
      const TEST_NODE = NodeList.prototype.isPrototypeOf(NODE_LIST)
      expect(TEST_NODE).toBeTruthy()
    })

    test('Which appear in the dom return a nodeList containing only elements with theses classes in the element', () => {
      const TARGET_ID = document.getElementById('myId')
      const NODE_LIST = $byClass(['mySecondClass', 'myThirdClass'], TARGET_ID)
      expect(NODE_LIST.length).toBe(2)
      expect(NODE_LIST[0]).toHaveClass('mySecondClass')
      expect(NODE_LIST[0]).toHaveClass('myThirdClass')
    })

    test('Which appear in the dom but not match an element in the element return empty nodeList', () => {
      const TARGET_ID = document.getElementById('myId')
      const NODE_LIST = $byClass(['myFirstClass', 'myFourthClass'], TARGET_ID)
      expect(NODE_LIST.length).toBe(0)
    })

    test('containing dot at start and space at start and end Which appear in the dom return a nodeList containing only elements with theses classes in the element', () => {
      const TARGET_ID = document.getElementById('myId')
      const NODE_LIST = $byClass(
        ['.mySecondClass', '   myThirdClass   '],
        TARGET_ID
      )
      expect(NODE_LIST.length).toBe(2)
      expect(NODE_LIST[0]).toHaveClass('mySecondClass')
      expect(NODE_LIST[0]).toHaveClass('myThirdClass')
    })

    test('Which not appear in the element return empty nodeList', () => {
      const TARGET_ID = document.getElementById('myId')
      const NODE_LIST = $byClass(['myFifthClass', '.mySixthClass'], TARGET_ID)
      expect(NODE_LIST.length).toBe(0)
    })
  })
})

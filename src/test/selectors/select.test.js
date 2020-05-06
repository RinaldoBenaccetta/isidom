import { $select } from '../../index'
import '@testing-library/jest-dom'

document.body.innerHTML =
  // eslint-disable-next-line no-multi-str
  '<div class="myFirstClass myThirdClass">hello</div>\
  <div class="mySecondClass"></div>\
  <span class="myThirdClass" data-color="red">world</span>\
  <p class="myFourthClass"></p>\
  <div class ="myFifthClass mySixthClass">!</div>\
  <div class="myFirstClass" id="myId">\
    <span name="John Doe" class ="myThirdClass" data-color="red">find me</span>\
    <span name="John Doe" class ="mySecondClass" data-color="red">!</span>\
    <div name="John Doe" class="myFirstClass"></div>\
    <div class="myThirdClass mySecondClass"></div>\
    <div class="myFirstClass myThirdClass"></div>\
    <div class="mySecondClass myThirdClass"></div>\
  </div>'

describe('select', () => {
  describe('given a valid string', () => {
    test('return a nodeList', () => {
      const NODE_LIST = $select('.myFirstClass')
      const TEST_NODE = NodeList.prototype.isPrototypeOf(NODE_LIST)
      expect(TEST_NODE).toBeTruthy()
    })

    test('which selectors appear in the dom return a nodeList containing only elements with these selectors', () => {
      const NODE_LIST = $select(
        'div.myFirstClass>span.myThirdClass[name="John Doe"][data-color="red"]'
      )
      expect(NODE_LIST.length).toBe(1)
      expect(NODE_LIST[0]).toHaveTextContent('find me')
    })

    test('which selectors match nothing return an empty nodeList', () => {
      const NODE_LIST = $select(
        'div.myFirstClass>span.myThirdClass[name="John Doe"][data-color="blue"]'
      )
      expect(NODE_LIST.length).toBe(0)
    })
  })

  describe('given a valid string and a valid element', () => {
    test('return a nodeList', () => {
      const TARGET_ID = document.getElementById('myId')
      const NODE_LIST = $select('.myFirstClass', TARGET_ID)
      const TEST_NODE = NodeList.prototype.isPrototypeOf(NODE_LIST)
      expect(TEST_NODE).toBeTruthy()
    })
  })

  test('Which selectors appear in the dom return a nodeList containing only elements with these selectors', () => {
    const TARGET_ID = document.getElementById('myId')
    const NODE_LIST = $select('span.myThirdClass[data-color="red"]', TARGET_ID)
    expect(NODE_LIST.length).toBe(1)
    expect(NODE_LIST[0]).toHaveTextContent('find me')
  })

  test('Which selectors match nothing return an empty nodeList', () => {
    const TARGET_ID = document.getElementById('myId')
    const NODE_LIST = $select('span.myThirdClass[data-color="blue"]', TARGET_ID)
    expect(NODE_LIST.length).toBe(0)
  })
})

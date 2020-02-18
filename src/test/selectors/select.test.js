import { $select } from '../../lib/selectors/select'
import '@testing-library/jest-dom'

document.body.innerHTML =
  // eslint-disable-next-line no-multi-str
  '<div class="myFirstClass myFirdClass">hello</div>\
  <div class="mySecondClass"></div>\
  <span class="myFirdClass" data-color="red">world</span>\
  <p class="myFourthClass"></p>\
  <div class ="myFifthClass mySixthClass">!</div>\
  <div class="myFirstClass" id="myId">\
    <span name="Jhon Doe" class ="myFirdClass" data-color="red">find me</span>\
    <span name="Jhon Doe" class ="mySecondClass" data-color="red">!</span>\
    <div name="Jhon Doe" class="myFirstClass"></div>\
    <div class="myFirdClass mySecondClass"></div>\
    <div class="myFirstClass myThirdClass"></div>\
    <div class="mySecondClass myThirdClass"></div>\
  </div>'

describe('select', () => {
  describe('given a valid string', () => {
    test('return a nodelist', () => {
      const NODE_LIST = $select('.myFirstClass')
      const TEST_NODE = NodeList.prototype.isPrototypeOf(NODE_LIST)
      expect(TEST_NODE).toBeTruthy()
    })

    test('wich selectors appear in the dom return a nodelist containing only elements with these selectors', () => {
      //   const NODE_LIST = $select("div.myFirstClass>span span[data-color='red'] span[name='Jhon Doe']")
      const NODE_LIST = $select(
        'div.myFirstClass>span.myFirdClass[name="Jhon Doe"][data-color="red"]'
      )
      expect(NODE_LIST.length).toBe(1)
      expect(NODE_LIST[0]).toHaveTextContent('find me')
    })

    test('wich selectors match nothing return an empty nodelist', () => {
      const NODE_LIST = $select(
        'div.myFirstClass>span.myFirdClass[name="Jhon Doe"][data-color="blue"]'
      )
      expect(NODE_LIST.length).toBe(0)
    })
  })

  describe('given a valid string and a valid element', () => {
    test('return a nodelist', () => {
      const TARGET_ID = document.getElementById('myId')
      const NODE_LIST = $select('.myFirstClass', TARGET_ID)
      const TEST_NODE = NodeList.prototype.isPrototypeOf(NODE_LIST)
      expect(TEST_NODE).toBeTruthy()
    })
  })

  test('wich selectors appear in the dom return a nodelist containing only elements with these selectors', () => {
    const TARGET_ID = document.getElementById('myId')
    const NODE_LIST = $select('span.myFirdClass[data-color="red"]', TARGET_ID)
    expect(NODE_LIST.length).toBe(1)
    expect(NODE_LIST[0]).toHaveTextContent('find me')
  })

  test('wich selectors match nothing return an empty nodelist', () => {
    const TARGET_ID = document.getElementById('myId')
    const NODE_LIST = $select('span.myFirdClass[data-color="blue"]', TARGET_ID)
    expect(NODE_LIST.length).toBe(0)
  })
})

import { $setAttribute } from '../../../manipulators/attributes/set-attribute'
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
    <input type="range" min="10" max="125" id="myId"></input>\
    <div class="mySecondClass myThirdClass"></div>\
  </div>'

describe('$setAttribute', () => {
  describe('given a value, a property and an HTMLElement', () => {
    test('wich the property is an existant attribute, change the attribute', () => {
      document.body.innerHTML = DOC
      const TARGET_ID = document.getElementById('myId')
      $setAttribute('42', 'min', TARGET_ID)
      expect(TARGET_ID.getAttribute('min')).toBe('42')
    })

    test('wich the property is not already present in the HTMLElement, add the attribute with the value', () => {
      document.body.innerHTML = DOC
      const TARGET_ID = document.getElementById('myId')
      $setAttribute('42', 'step', TARGET_ID)
      expect(TARGET_ID.getAttribute('step')).toBe('42')
    })
  })

  describe('given a value, a property and a nodeList', () => {
    test('change or add the attribute to all HTMLElement of the nodeList', () => {
      document.body.innerHTML = DOC
      const NODE_LIST = document.querySelectorAll('.myFirstClass')
      $setAttribute('Jhon Doe', 'name', NODE_LIST)
      expect(NODE_LIST.length).toBe(4)
      expect(NODE_LIST[0]).toHaveAttribute('name', 'Jhon Doe')
      expect(NODE_LIST[1]).toHaveAttribute('name', 'Jhon Doe')
      expect(NODE_LIST[2]).toHaveAttribute('name', 'Jhon Doe')
      expect(NODE_LIST[3]).toHaveAttribute('name', 'Jhon Doe')
    })
  })

  describe('given a value, a property and an HTMLCollection', () => {
    test('change or add the attribute to all HTMLElement of the nodeList', () => {
      document.body.innerHTML = DOC
      const HTML_COLLECTION = document.getElementsByClassName('myFirstClass')
      $setAttribute('Jhon Doe', 'name', HTML_COLLECTION)
      expect(HTML_COLLECTION.length).toBe(4)
      expect(HTML_COLLECTION[0]).toHaveAttribute('name', 'Jhon Doe')
      expect(HTML_COLLECTION[1]).toHaveAttribute('name', 'Jhon Doe')
      expect(HTML_COLLECTION[2]).toHaveAttribute('name', 'Jhon Doe')
      expect(HTML_COLLECTION[3]).toHaveAttribute('name', 'Jhon Doe')
    })
  })
})

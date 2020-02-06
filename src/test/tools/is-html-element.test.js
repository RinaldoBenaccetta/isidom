import { $isHtmlElement } from '../../tools/is-html-element'

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

describe('$isCollection', () => {
  describe('given an element', () => {
    test('is an element', () => {
      const htmlElement = document.getElementById('myId')
      expect($isHtmlElement(htmlElement)).toBeTruthy()
    })

    describe('given an nodelist', () => {
      test('is not an element', () => {
        const nodelist = document.querySelectorAll('myFirstClass')
        expect($isHtmlElement(nodelist)).toBeFalsy()
      })
    })

    describe('given a string', () => {
      test('is not an element', () => {
        expect($isHtmlElement('myString')).toBeFalsy()
      })
    })
  })
})

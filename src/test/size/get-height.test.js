import { $getHeight } from '../../index'
import '@testing-library/jest-dom'

document.body.innerHTML =
  // eslint-disable-next-line no-multi-str
  '<div class="myFirstClass" style="height: 150px;" id="myId">\
    <div class="myFirstClass"></div>\
    <div class="myThirdClass mySecondClass"></div>\
    <div class="myFirstClass myThirdClass"></div>\
    <div class="mySecondClass myThirdClass"></div>\
  </div>'

describe('$getHeight', () => {
  describe('given an HTMLElement', () => {
    test('Which have an height, return the height', () => {
      const HTML_ELEMENT = document.getElementById('myId')
      const TEST = $getHeight(HTML_ELEMENT)
      expect(TEST).toBe(150)
    })
  })

  describe('given no argument', () => {
    test('return the height of the window', () => {
      const TEST = $getHeight()
      expect(TEST).toBe(768)
    })
  })
})

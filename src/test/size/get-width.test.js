import { $getWidth } from '../../index'
import '@testing-library/jest-dom'

document.body.innerHTML =
  // eslint-disable-next-line no-multi-str
  '<div class="myFirstClass" style="width: 150px;" id="myId">\
    <div class="myFirstClass"></div>\
    <div class="myThirdClass mySecondClass"></div>\
    <div class="myFirstClass myThirdClass"></div>\
    <div class="mySecondClass myThirdClass"></div>\
  </div>'

describe('$getWidth', () => {
  describe('given an HTMLElement', () => {
    test('Which have an width, return the width', () => {
      const HTML_ELEMENT = document.getElementById('myId')
      const TEST = $getWidth(HTML_ELEMENT)
      expect(TEST).toBe(150)
    })
  })

  describe('given no argument', () => {
    test('return the width of the window', () => {
      const TEST = $getWidth()
      expect(TEST).toBe(1024)
    })
  })
})

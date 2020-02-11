import { $findPreviousSiblings } from '../../selectors/find-previous-siblings'
import '@testing-library/jest-dom'

document.body.innerHTML =
  // eslint-disable-next-line no-multi-str
  '<div class="myFirstClass myFirdClass">hello</div>\
  <div class="mySecondClass"></div>\
  <div class="myFirdClass">world</div>\
  <span class="myFourthClass"></span>\
  <p class ="myFirstClass">!</p>\
  <div class ="myFifthClass mySixthClass">!</div>\
  <div class="myFirstClass" id="myId">\
    <div class="myFirdClass mySecondClass">I am the second one</div>\
    <div class="mySecondClass myThirdClass">Find me first</div>\
    <p class="myFirstClass myThirdClass" id="mySecondId"></p>\
    <div class="myFirstClass">It is not me</div>\
  </div>\
  <div>\
    <div class="myFirstClass myThirdClass" id="sadId"></div>\
  </div>'

describe('$findPreviousSiblings', () => {
  describe('given an HTMLElement', () => {
    test('wich is present in the DOM and have siblings after return an array of the next siblings', () => {
      const TARGET_ID = document.getElementById('mySecondId')
      const ARRAY = $findPreviousSiblings(TARGET_ID)
      const TEST_ARRAY = Array.isArray(ARRAY)
      expect(TEST_ARRAY).toBeTruthy()
      expect(ARRAY.length).toBe(2)
      expect(ARRAY[0]).toHaveTextContent('Find me first')
      expect(ARRAY[1]).toHaveTextContent('I am the second one')
    })
  })

  test('wich is present in the DOM and have no next siblings return null', () => {
    const TARGET_ID = document.getElementById('sadId')
    const ARRAY = $findPreviousSiblings(TARGET_ID)
    expect(ARRAY).toBeNull()
  })
})

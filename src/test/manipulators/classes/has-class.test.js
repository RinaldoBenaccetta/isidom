import { $hasClass } from '../../../manipulators/classes/has-class'

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

describe('$hasClass', () => {
  describe('given a string and an HTMLElement', () => {
    const TARGET_ID = document.getElementById('myId')

    test('wich is a valid class present in the HTMLElement return true', () => {
      let myTest = $hasClass('myFirstClass', TARGET_ID)
      expect(myTest).toBeTruthy()
      myTest = $hasClass('mySecondClass', TARGET_ID)
      expect(myTest).toBeTruthy()
      myTest = $hasClass('imHereClass', TARGET_ID)
      expect(myTest).toBeTruthy()
    })

    test('wich is a valid class containing a dot at start, and present in the HTMLElement return true', () => {
      let myTest = $hasClass('.myFirstClass', TARGET_ID)
      expect(myTest).toBeTruthy()
      myTest = $hasClass('.mySecondClass', TARGET_ID)
      expect(myTest).toBeTruthy()
      myTest = $hasClass('.imHereClass', TARGET_ID)
      expect(myTest).toBeTruthy()
    })

    test('wich is a valid class containing spaces at start and end, and present in the HTMLElement return true', () => {
      let myTest = $hasClass('   myFirstClass   ', TARGET_ID)
      expect(myTest).toBeTruthy()
      myTest = $hasClass('  mySecondClass ', TARGET_ID)
      expect(myTest).toBeTruthy()
      myTest = $hasClass(' imHereClass  ', TARGET_ID)
      expect(myTest).toBeTruthy()
    })

    test('wich is a valid class not present in the HTMLElement return false', () => {
      const MY_TEST = $hasClass('escapedClass', TARGET_ID)
      expect(MY_TEST).toBeFalsy()
    })

    test('wich is empty return false', () => {
      const MY_TEST = $hasClass('', TARGET_ID)
      expect(MY_TEST).toBeFalsy()
    })
  })
})

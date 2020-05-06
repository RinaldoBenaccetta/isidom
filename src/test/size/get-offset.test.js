import { $getOffset } from '../../lib/size/get-offset'

document.body.innerHTML =
  // eslint-disable-next-line no-multi-str
  '<div class="myFirstClass" style="height: 150px;" id="myId">\
    <div class="myFirstClass"></div>\
    <div class="myFirdClass mySecondClass"></div>\
    <div class="myFirstClass myThirdClass"></div>\
    <div class="mySecondClass myThirdClass"></div>\
  </div>'

describe('$getOffset', () => {
  test('Given an HTMLElement, return his offset', () => {
    const HTML_ELEMENT = document.getElementById('myId')
    const TEST = $getOffset(HTML_ELEMENT)

    expect(TEST).toStrictEqual({ left: 0, top: 0 })
  })
})

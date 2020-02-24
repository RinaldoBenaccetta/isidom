/**
 * @description
 * Check if input is an HTML element and return true or false.
 *
 * To be used like this :
 *
 *     if($isHtmlElement(input)) { do something }
 *
 * @export
 *
 * @param {*} input
 *
 * @returns {boolean}
 */
export function $isHtmlElement (input) {
  return input instanceof HTMLElement
}

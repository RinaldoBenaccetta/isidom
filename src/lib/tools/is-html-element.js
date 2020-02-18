/**
 * @description Check if input is an HTML element and return true or false.
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

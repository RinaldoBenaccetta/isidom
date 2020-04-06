/**
 * @description
 * Checks if input is an HTMLelement and returns true or false.
 *
 * @example
 * if($isHtmlElement(input)) { make something }
 *
 * @param {*} input
 *
 * @returns {boolean}
 */
export function $isHtmlElement (input) {
  return input instanceof HTMLElement
}

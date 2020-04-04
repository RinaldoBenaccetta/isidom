/**
 * @description
 * Check if input is an HTMLelement and return true or false.
 *
 * @example
 * if($isHtmlElement(input)) { make something }
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

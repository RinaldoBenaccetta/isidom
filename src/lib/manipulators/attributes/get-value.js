/**
 * @description
 * Return the value of an input element.
 *
 * To be used like this :
 *
 *     let a = $getValue(input)
 *
 * @export
 *
 * @param {HTMLElement} input
 *
 * @returns {string}
 */
export function $getValue (input) {
  return input.value
}

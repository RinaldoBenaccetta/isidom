/**
 * @description
 * Set the specified value of the specified input.
 *
 * To be used like this :
 *
 *     $setValue(value, input)
 *
 * @export
 *
 * @param {string|number|boolean} value
 *
 * @param {HTMLBaseElement} input
 */
export function $setValue (value, input) {
  input.value = value
}

/**
 * @description
 * Set the specified value of the specified input.
 *
 * @example
 * $setValue(value, input)
 *
 * @export
 *
 * @param {string|number|boolean} value
 *
 * @param {HTMLElement} input
 */
export function $setValue (value, input) {
  input.value = value
}

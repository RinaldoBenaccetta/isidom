/**
 * @description
 * Sets the specified value of the specified input element.
 *
 * @example
 * $setValue(value, input)
 *
 * @param {string|number|boolean} value
 *
 * @param {HTMLElement} input
 */
export function $setValue (value, input) {
  input.value = value
}

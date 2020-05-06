/**
 * @description
 * Checks if input is an array or not and returns true or false.
 *
 * @example
 * if(isi.$isArray(input)) { make something }
 *
 * @param {*} input
 *
 * @returns {boolean}
 */
export function $isArray (input) {
  return Array.isArray(input)
}

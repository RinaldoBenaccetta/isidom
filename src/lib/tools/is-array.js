/**
 * @description
 * Check if input is an array or not and return true or false.
 *
 * @example 
 * if($isArray(input)) { make something }
 *
 * @param {*} input
 *
 * @returns {boolean}
 */
export function $isArray (input) {
  return Array.isArray(input)
}

/**
 * @description
 * Check if input is an array or not and return true or false.
 *
 * To be used like this :
 *
 *     if($isArray(input)) { do something }
 *
 * @param {*} input
 *
 * @returns {boolean}
 */
export function $isArray (input) {
  return Array.isArray(input)
}

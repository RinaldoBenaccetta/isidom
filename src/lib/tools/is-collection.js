/**
 * @description
 * Check if input is an HTMLcollection and return true or false.
 *
 * @example
 * if($isCollection(input)) { make something }
 * 
 * @export
 *
 * @param {*} input
 *
 * @returns {boolean}
 */
export function $isCollection (input) {
  // return HTMLCollection.prototype.isPrototypeOf(input)
  return input instanceof HTMLCollection
}

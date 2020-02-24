/**
 * @description
 * Check if input is an HTML collection and return true or false.
 *
 * To be used like this :
 *
 *     if($isCollection(input)) { do something }
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

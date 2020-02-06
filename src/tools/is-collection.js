/**
 * @description Check if input is an HTML collection and return true or false.
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

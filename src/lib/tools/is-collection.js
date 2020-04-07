/**
 * @description
 * Checks if input is an HTMLcollection and returns true or false.
 *
 * @example
 * if(isi.$isCollection(input)) { make something }
 * 
 * @param {*} input
 *
 * @returns {boolean}
 */
export function $isCollection (input) {
  // return HTMLCollection.prototype.isPrototypeOf(input)
  return input instanceof HTMLCollection
}

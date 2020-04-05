/**
 * @description
 * Check if input is a nodelist and return true or false.
 *
 * @example
 * if($isNodeList(input)) { make something }
 * 
 * @param {*} input
 *
 * @returns {boolean}
 */
export function $isNodeList (input) {
  // return NodeList.prototype.isPrototypeOf(input)
  return input instanceof NodeList
}

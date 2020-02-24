/**
 * @description
 * Check if input is a nodelist and return true or false.
 *
 * To be used like this :
 *
 *     if($isNodeList(input)) { do something }
 *
 * @export
 *
 * @param {*} input
 *
 * @returns {boolean}
 */
export function $isNodeList (input) {
  // return NodeList.prototype.isPrototypeOf(input)
  return input instanceof NodeList
}

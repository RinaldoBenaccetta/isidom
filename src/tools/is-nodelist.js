/**
 * @description Check if input is a nodelist and return true or false.
 *
 * @export
 *
 * @param {*} input
 *
 * @returns {boolean}
 */
export function $isNodeList (input) {
  return NodeList.prototype.isPrototypeOf(input)
}

import * as elements from '../constants/elements'

/**
 * @description
 * Select elements based on querySelectorAll :
 *  https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll
 *
 * Wich return a nodeList of elements containing specified selectors.
 *
 * A nodeList is static and is not live. It's like a snapshot of the DOM.
 *
 * A nodeList accept native JS forEach.
 *
 * @example
 * let query = "div.myClass, div.myOtherClass"
 * let a = $select(query, element)
 *
 * @export
 *
 * @param {string} query
 * @param {element} [element=document]
 *
 * @returns {NodeList}
 */
export function $select (query, element = elements.$document) {
  return element.querySelectorAll(query)
}

import * as elements from '../constants/elements'

/**
 * @description
 * Selects elements based on querySelectorAll :
 *  https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll
 *
 * Which returns a nodeList of elements containing specified selectors.
 *
 * A nodeList is static and is not live. It's like a snapshot of the DOM.
 *
 * A nodeList accepts native JS forEach.
 *
 * @example
 * let query = "div.myClass, div.myOtherClass"
 * let a = isi.$select(query, element)
 *
 * @param {string} query
 * @param {element} [element=document]
 *
 * @returns {NodeList}
 */
export function $select (query, element = elements.$document) {
  return element.querySelectorAll(query)
}

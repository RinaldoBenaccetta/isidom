import * as elements from '../constants/elements'

/**
 * @description Select elements based on querySelectorAll wich return a nodeList of elements containing specified selectors.
 *              A nodeList is static and is not live. It's like a snapshot of the DOM.
 *              A nodeList accept forEach.
 *
 * @export
 *
 * @param {string} query
 * @param {element} [element=elements.$document]
 *
 * @returns
 */
export function $select (query, element = elements.$document) {
  return element.querySelectorAll(query)
}

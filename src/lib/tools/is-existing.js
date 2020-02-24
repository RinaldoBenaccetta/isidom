import * as elements from '../constants/elements'
import * as values from '../constants/values'

/**
 * @description
 * Return true if selector match an element in the document or in
 * the specified parent element.
 *
 * Return false if selector match no element in the document or in
 * the specified parent element.
 *
 * To be used like this :
 *
 *     if($isExisting(query)) { do something }
 *
 * @export
 *
 * @param {string} query
 * @param {HTMLElement=} [element=elements.document]
 *
 * @returns {boolean}
 */
export function $isExisting (query, element = elements.$document) {
  return element.querySelector(query) ? values.$true : values.$false
}

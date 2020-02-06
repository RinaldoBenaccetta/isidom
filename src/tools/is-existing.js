import * as elements from '../constants/elements'
import * as values from '../constants/values'

/**
 * @description Return true if selector match an element in the document or in the parent element specified.
 *              Return false if selector match no element in the document or in the parent element specified.
 *
 * @export
 *
 * @param {string} query
 * @param {HTMLElement=} [element=elements.$document]
 *
 * @returns {boolean}
 */
export function $isExisting (query, element = elements.$document) {
  if (element.querySelector(query)) {
    return values.$true
  }
  return values.$false
}

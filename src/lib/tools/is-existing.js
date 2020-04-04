import * as elements from '../constants/elements'
import * as values from '../constants/values'

/**
 * @description
 * Return true if selector matches an element in the document or in
 * the specified parent element.
 *
 * Return false if selector matches no element in the document or in
 * the specified parent element.
 *
 * @example
 * if($isExisting(query)) { make something }
 *
 * @export
 *
 * @param {string} query
 * @param {HTMLElement=} [element=document]
 *
 * @returns {boolean}
 */
export function $isExisting (query, element = elements.$document) {
  return element.querySelector(query) ? values.$true : values.$false
}

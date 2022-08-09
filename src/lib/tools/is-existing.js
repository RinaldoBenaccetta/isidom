import * as elements from '../constants/elements'
import * as values from '../constants/values'

/**
 * @description
 * Returns true if selector matches an element in the document or in
 * the specified parent element.
 *
 * Returns false if selector matches no element in the document or in
 * the specified parent element.
 *
 * @example
 * if(isi.$isExisting(query)) { make something }
 *
 * @param {string} query
 * @param {HTMLElement=} [element=document]
 *
 * @returns {boolean}
 */
export const $isExisting = (query, element = elements.$document) =>
  element.querySelector(query) ? values.$true : values.$false

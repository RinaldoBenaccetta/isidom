import * as values from '../constants/values'

/**
 * @description
 * Returns an array containing all next HTMLElements siblings from
 * a specified HTMLElement.
 *
 * Returns null if there are no next siblings found.
 *
 * @example
 * let a = isi.$findNextSiblings(element)
 *
 * @param {HTMLElement} element
 *
 * @returns {array, null}
 */
export const $findNextSiblings = element => {
  const SIBLINGS = []
  while ((element = element.nextElementSibling)) {
    SIBLINGS.push(element)
  }
  return SIBLINGS.length > 0 ? SIBLINGS : values.$null
}

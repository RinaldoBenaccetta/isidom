import * as values from '../constants/values'

/**
 * @description
 * Returns an array containing all previous HTMLElements siblings from
 * a specified HTMLElement.
 *
 * The closest sibling is the first of the array, then the second closest,
 * and so on.
 *
 * Returns null if there are no previous siblings found.
 *
 * @example
 * let a = isi.$findPreviousSiblings(element)
 *
 * @param {HTMLElement} element
 *
 * @returns {Array|null}
 */
export const $findPreviousSiblings = element => {
  const SIBLINGS = []
  while ((element = element.previousElementSibling)) {
    SIBLINGS.push(element)
  }
  return SIBLINGS.length > 0 ? SIBLINGS : values.$null
}

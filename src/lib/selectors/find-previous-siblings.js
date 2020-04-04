import * as values from '../constants/values'

/**
 * @description
 * Return an array containing all previous HTMLElements siblings from
 * a specified HTMLElement.
 *
 * The closest sibling is the first of the array, then the second closest,
 * and so on.
 *
 * Return null if there is no previous siblings found.
 *
 * To be used like this :
 *
 *     let a = $findPreviousSiblings(element)
 *
 * @export
 *
 * @param {HTMLElement} element
 *
 * @returns {array|null}
 */
export function $findPreviousSiblings (element) {
  const SIBLINGS = []
  while ((element = element.previousElementSibling)) {
    SIBLINGS.push(element)
  }
  return SIBLINGS.length > 0 ? SIBLINGS : values.$null
}

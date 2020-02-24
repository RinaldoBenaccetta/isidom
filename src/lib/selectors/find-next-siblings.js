import * as values from '../constants/values'

/**
 * @description
 * Return an array containing all next HTMLElements siblings from
 * a specified HTMLElement.
 *
 * Return null if there is no next siblings found.
 *
 * To be used like this :
 *
 *     let a = $findNextSiblings(element)
 *
 * @export
 *
 * @param {HTMLElement} element
 *
 * @returns {array, null}
 */
export function $findNextSiblings (element) {
  const SIBLINGS = []
  while ((element = element.nextElementSibling)) {
    SIBLINGS.push(element)
  }
  return SIBLINGS.length > 0 ? SIBLINGS : values.$null
}

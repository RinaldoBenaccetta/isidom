import * as values from '../constants/values'

/**
 * @descriptionReturn Return an array containing all next HTMLElements siblings from a specified HTMLElement.
 *                    Return null if there is no next siblings.
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

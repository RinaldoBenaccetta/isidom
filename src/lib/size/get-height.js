import * as values from '../constants/values'
import * as elements from '../constants/elements'
import * as properties from '../constants/css-properties'

/**
 * @description
 * Returns the height in pixels of an HTMLElement.
 * If no HTMLElement is specified, the height of the window is returned.
 *
 * @example
 * let a = $getHeight(element)
 *
 * @param {HTMLElement} [element=null]
 *
 * @returns {number}
 */
export function $getHeight (element = values.$null) {
  if (element) {
    return parseFloat(
      getComputedStyle(element)[properties.$cssHeight].replace(
        values._$px,
        values._$emptyString
      )
    )
  }
  return elements.$window.innerHeight
}

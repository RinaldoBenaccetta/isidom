import * as values from '../constants/values'
import * as elements from '../constants/elements'
import * as properties from '../constants/css-properties'

/**
 * @description
 * Return the Width in pixels of an HTMLElement.
 * If no HTMLElement is specified, or the element value is null,
 * the width of the window is returned.
 *
 * To be used like this :
 *
 *     let a = $getWidth(element)
 *
 * @export
 *
 * @param {HTMLElement} [element=null]
 *
 * @returns {number}
 */
export function $getWidth (element = values.$null) {
  if (element) {
    return parseFloat(
      getComputedStyle(element)[properties.$cssWidth].replace(
        values._$px,
        values._$emptyString
      )
    )
  }
  return elements.$window.innerWidth
}
import * as values from '../constants/values'
import * as elements from '../constants/elements'

/**
 * @description
 * Return the Height in pixels of an HTMLElement.
 * If no HTMLElement is specified, the height of the window is returned.
 *
 * To be used like this :
 *
 *     let a = $getHeight(element)
 *
 * @export
 *
 * @param {HTMLElement} [element=null]
 *
 * @returns {number}
 */
export function $getHeight (element = values.$null) {
  if (element) {
    return parseFloat(
      getComputedStyle(element).height.replace(
        values._$px,
        values._$emptyString
      )
    )
  }
  return elements.$window.innerHeight
}

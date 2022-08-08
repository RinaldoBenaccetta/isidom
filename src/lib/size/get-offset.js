import * as elements from '../constants/elements'

/**
 * @description
 * Returns an object containing the top and left positions
 * of a specified element relative to the top and left of the view.
 *
 * @example
 * let offset = isi.$getOffset(element)
 * console.log(offset.top)
 * console.log(offset.left)
 *
 * @param {HTMLElement} element
 *
 * @returns {Object}
 * The returned object contains the 'top' and 'left' properties
 * that can be accessed.
 */
export function $getOffset (element) {
  const RECTANGLE = element.getBoundingClientRect()
  return {
    top: RECTANGLE.top + elements.$docBody.scrollTop,
    left: RECTANGLE.left + elements.$docBody.scrollLeft
  }
}

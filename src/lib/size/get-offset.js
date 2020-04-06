import * as elements from '../constants/elements'

/**
 * @description
 * Returns an object containing the top and left positions of a specified element relative to the top and left of the view.
 *
 * @example
 * let a = $getOffset(element)
 * console.log(a.top)
 * console.log(a.left)
 *
 * @param {HTMLElement} element
 *
 * @returns {Object}
 * The returned object contains the 'top' and 'left' properties that can be accessed.
 */
export function $getOffset (element) {
  var rectangle = element.getBoundingClientRect()
  return {
    top: rectangle.top + elements.$docBody.scrollTop,
    left: rectangle.left + elements.$docBody.scrollLeft
  }
}

import * as elements from '../constants/elements'

/**
 * @description
 * Return an object containing the top and left position of a specified element
 * relative to the top and left of the view.
 *
 * @example
 * let a = $getOffset(element)
 * console.log(a.top)
 * console.log(a.left)
 *
 * @export
 *
 * @param {HTMLElement} element
 *
 * @returns {object}
 * The returned object contain the keys top and left that can be accessed.
 */
export function $getOffset (element) {
  var rectangle = element.getBoundingClientRect()
  return {
    top: rectangle.top + elements.$docBody.scrollTop,
    left: rectangle.left + elements.$docBody.scrollLeft
  }
}

import * as values from '../constants/values'

/**
 * @description
 * Return an array containing siblings HTMLElement from a specified HTMLElement.
 *
 * Return null if there is no siblings.
 *
 * @example
 * let a = $findSiblings(element)
 *
 * @param {HTMLElement} element
 *
 * @returns {Array|null}
 */
export function $findSiblings (element) {
  const output = Array.prototype.filter.call(
    element.parentNode.children,
    function (child) {
      return child !== element
    }
  )

  return output.length > 0 ? output : values.$null
}

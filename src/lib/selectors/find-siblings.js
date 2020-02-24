import * as values from '../constants/values'

/**
 * @description
 * Return an array containing siblings HTMLElement from a specified HTMLElement.
 *
 * Return null if there is no siblings.
 *
 * To be used like this :
 *
 *     let a = $findSiblings(element)
 *
 * @export
 *
 * @param {HTMLElement} element
 *
 * @returns {array|null}
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

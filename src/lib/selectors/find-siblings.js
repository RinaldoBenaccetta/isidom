import * as values from '../constants/values'

/**
 * @description Return an array containing HTMLElement siblings from an HTMLElement specified.
 *              Return null if there is no siblings.
 *
 * @export
 *
 * @param {HTMLElement} element
 *
 * @returns {array, null}
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

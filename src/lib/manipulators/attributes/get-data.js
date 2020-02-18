import { $getAttribute } from './get-attribute'

/**
 * @description Return the value of the specified data (eg. : data-color).
 *              if the specified data is not present in the HTMLElement,
 *              null is returned.
 *
 * @export
 *
 * @param {string} data The data without data- at start
 *                      (eg. : color refer to data-color)
 * @param {HTMLElement} element
 *
 * @returns {string, null}
 */
export function $getData (data, element) {
  return $getAttribute('data-' + data, element)
}

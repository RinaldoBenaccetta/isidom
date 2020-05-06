import { $getAttribute } from './get-attribute'

/**
 * @description
 * Returns the value of the specified data (E.g. : data-color) of the element.
 *
 * If the specified data is not present in the HTMLElement, null is returned.
 *
 * @example
 * let a = isi.$getData(data, element)
 *
 * // E.g. :
 *
 * let a = isi.$getData('color', element)
 * // Will return the data-color of the Element.
 *
 * @param {string} data
 * The data without data- at start (E.g. : color 'refer' to 'data-color')
 * @param {HTMLElement} element
 *
 * @returns {string, null}
 */
export function $getData (data, element) {
  return $getAttribute('data-' + data, element)
}

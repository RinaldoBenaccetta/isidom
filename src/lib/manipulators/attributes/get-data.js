import { $getAttribute } from './get-attribute'

/**
 * @description
 * Return the value of the specified data (E.g. : data-color).
 *
 * If the specified data is not present in the HTMLElement, null is returned.
 *
 * To be used like this :
 *
 *     let a = $getData(data, element)
 *
 * E.g. :
 *
 *     let a = $getData('weight', element)
 *
 * Will return the data-weight of the Element.
 *
 * @export
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

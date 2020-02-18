import { $forEach } from '../../tools/for-each'

/**
 * @description Change or add specified value to the specified attribute of
 *              HTMLElement or all HTMLElement of the specified array,
 *              HTMLCollection or nodeList.
 *
 * @export
 *
 * @param {string} value
 * @param {string} attribute
 * @param {HTMLElement, HTMLElement[], nodeList, HTMLCollection} element
 */
export function $setAttribute (value, attribute, element) {
  $forEach(item => {
    item.setAttribute(attribute, value)
  }, element)
}

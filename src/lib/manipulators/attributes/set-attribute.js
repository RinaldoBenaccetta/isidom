import { $forEach } from '../../tools/for-each'

/**
 * @description
 * Changes or adds specified value to the specified attribute of HTMLElement
 * or all HTMLElement of the specified array, HTMLCollection or nodeList.
 *
 * To be used like this :
 *
 *     isi.$setAttributes(value, attribute, element)
 *
 * @example
 * isi.$setAttributes('John Doe', 'name', element)
 *
 * @param {string} value
 * @param {string} attribute
 * @param {HTMLElement|HTMLElement[]|nodeList|HTMLCollection} element
 */
export function $setAttribute (value, attribute, element) {
  $forEach(item => {
    item.setAttribute(attribute, value)
  }, element)
}

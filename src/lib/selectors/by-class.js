import { $selectorArrayToString } from '../tools/selector-array-to-string'
import * as constant from '../constants/elements'

/**
 * @description
 * Select elements based on querySelectorAll(https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll) wich return a static nodeList of
 * elements containing specified class.
 *
 * The result is not live : Change in the DOM does not affect the nodeList content.
 * https://developer.mozilla.org/en-US/docs/Web/API/NodeList
 *
 * The nodeList accept native JS forEach.
 *
 * @example
 * let a = $byClass('classList', element)
 *
 * @param {string|string[]} classList
 * The string and strings in array can start with a dot or not.
 * The string and strings in array can have spaces at start an end.
 * @param {HTMLElement=} [element=document]
 *
 * @returns {NodeList}
 */
export function $byClass (classList, element = constant.$document) {
  return element.querySelectorAll($selectorArrayToString(classList))
}

import { $selectorArrayToString } from '../tools/selector-array-to-string'
import * as constant from '../constants/elements'

/**
 * @description
 * Selects elements based on querySelectorAll(https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll) wich returns a static nodeList of
 * elements containing specified classes.
 *
 * The result is not live :
 * Change in the DOM do not affect the nodeList content.
 * https://developer.mozilla.org/en-US/docs/Web/API/NodeList
 *
 * The nodeList accepts native JS forEach.
 *
 * @example
 * let a = isi.$byClass('classList', element)
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

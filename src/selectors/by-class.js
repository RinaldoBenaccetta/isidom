import { $selectorArrayToString } from '../tools/selector-array-to-string'
import * as constant from '../constants/elements'

/**
 * @description Select elements based on querySelectorAll wich return a nodeList of elements containing specified classs.
 *              A nodeList is not live.
 *              A nodeList accept forEach.
 *
 * @export
 *
 * @param {string, string[]} classList The string and strings in array can start with a dot or not.
 *                                     The string and strings in array can have spaces at start an end.
 * @param {HTMLElement=} [element=constant.$document]
 *
 * @returns
 */
export function $byClass (classList, element = constant.$document) {
  return element.querySelectorAll($selectorArrayToString(classList))
}

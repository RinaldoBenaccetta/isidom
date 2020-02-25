import { $selectorArrayToString } from '../tools/selector-array-to-string'
import * as constant from '../constants/elements'

/**
 * @description
 * Select elements based on querySelectorAll wich return a nodeList of
 * elements containing specified class.
 *
 * A nodeList is not live.
 *
 * A nodeList accept native JS forEach.
 *
 * To be used like this :
 *
 *     let a = $byClass('classList', element)
 *
 * @export
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

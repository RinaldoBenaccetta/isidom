import { $selectorArrayToString } from '../tools/selector-array-to-string'
import * as values from '../constants/values'
import * as elements from '../constants/elements'

/**
 * @description Select elements based on getElementsByClassName wich return an HTMLCollection of elements containing specified class.
 *              An HTMLCollection is live : a modification in the DOM is reflected in the HTMLCollection.
 *              An HTMLCollection don't accept forEach. Use other loops with it.
 *
 * @export
 *
 * @param {string, string[]} className The string and strings in array can start with a dot or not.
 *                                     The string and strings in array can have spaces at start an end.
 * @param {HTMLElement=} [element=elements.$document]
 *
 * @returns
 */
export function $byClassLive (className, element = elements.$document) {
  return element.getElementsByClassName(
    $selectorArrayToString(className, values.$false)
  )
}

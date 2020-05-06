import { $selectorArrayToString } from '../tools/selector-array-to-string'
import * as values from '../constants/values'
import * as elements from '../constants/elements'

/**
 * @description
 * Selects elements based on getElementsByClassName(https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByClassName)
 * which returns an HTMLCollection of elements containing specified class.
 *
 * An HTMLCollection is live : change in the DOM is reflected
 * in the HTMLCollection.
 *
 * An HTMLCollection doesn't accept forEach. Use other loops with it.
 *
 * @example
 * let a = isi.$byClassLive('classList', element)
 *
 * @param {string|string[]} classList
 * The string and strings in array can start with a dot or not.
 * The string and strings in array can have spaces at start an end.
 * @param {HTMLElement=} [element=document]
 *
 * @returns {HTMLCollection}
 */
export function $byClassLive (classList, element = elements.$document) {
  return element.getElementsByClassName(
    $selectorArrayToString(classList, values.$false)
  )
}

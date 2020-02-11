import { $cleanSelector } from '../../tools/clean-selector'
import * as elements from '../../constants/elements'

/**
 * @description Test if a class is present in the specified HTMLElement.
 *              Can test only one class at a time.
 *
 * @export
 *
 * @param {string} className The string can start with a dot or not.
 *                           The string can have spaces at start an end.
 * @param {HTMLElement} element
 *
 * @returns {boolean}
 */
export function $hasClass (className, element) {
  return element[elements.$classList].contains($cleanSelector(className))
}

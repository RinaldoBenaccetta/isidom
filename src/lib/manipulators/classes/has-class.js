import { $cleanSelector } from '../../tools/clean-selector'
import * as elements from '../../constants/elements'

/**
 * @description
 * Return true if a class is present in the specified HTMLElement.
 * Return true if not.
 *
 * Can test only one class at a time.
 *
 * To be used like this :
 *
 *     if($hasClass('className', element)) { do something }
 *
 * @export
 *
 * @param {string} className
 * The string can start with a dot or not with no influence on the output.
 * The string can have spaces at start an end with no influence on the output.
 * @param {HTMLElement} element
 *
 * @returns {boolean}
 */
export function $hasClass (className, element) {
  return element[elements.$classList].contains($cleanSelector(className))
}

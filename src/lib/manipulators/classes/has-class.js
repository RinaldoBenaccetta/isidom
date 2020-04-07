import { $cleanSelector } from '../../tools/clean-selector'
import * as elements from '../../constants/elements'

/**
 * @description
 * Returns true if a class is present in the specified HTMLElement.
 * Returns false if not.
 *
 * Can only test one class at a time.
 *
 * @example
 * isi.if($hasClass('className', element)) { make something }
 *
 * @param {string} className
 * The string can start with a dot or not with no influence on the output.
 * The string can have spaces at start and end with no influence on the output.
 * @param {HTMLElement} element
 *
 * @returns {boolean}
 */
export function $hasClass (className, element) {
  return element[elements.$classList].contains($cleanSelector(className))
}

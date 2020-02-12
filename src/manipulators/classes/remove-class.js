import { $forEach } from '../../tools/for-each'
import { $selectorToArray } from '../../tools/selector-to-array'
import * as elements from '../../constants/elements'

/**
 * @description Remove class or a list of classes from an HTMLElement or
 *              from all HTMLElement of a nodeList or an HTMLCollection.
 *
 * @export
 *
 * @param {sting, string[]} className
 * @param {HTMLElement, nodeList, HTMLCollection} element
 */
export function $removeClass (className, element) {
  $forEach(function (target) {
    target[elements.$classList].remove(...$selectorToArray(className))
  }, element)
}

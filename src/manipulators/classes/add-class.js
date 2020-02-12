import { $forEach } from '../../tools/for-each'
import { $cleanSelectorArray } from '../../tools/clean-selector-array'
import * as elements from '../../constants/elements'

/**
 * @description add a class or a list of classes to an HTMLElement
 *              or to all HTMLElements of a nodeList or an HTMLCollection.
 *
 * @export
 *
 * @param {sting, string[]} className
 * @param {HTMLElement, nodeList, HTMLCollection} element
 */
export function $addClass (className, element) {
  $forEach(function (target) {
    target[elements.$classList].add(...$cleanSelectorArray(className))
  }, element)
}

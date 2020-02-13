import { $forEach } from '../../tools/for-each'
import { $selectorToArray } from '../../tools/selector-to-array'
import * as elements from '../../constants/elements'

/**
 * @description Add a class or a list of classes to an HTMLElement
 *              or to all HTMLElements of a nodeList or an HTMLCollection.
 *
 *              If in application, classes are added only on HTMLELement a few
 *              number of times, the best for minification would be to use this
 *              instead of $addClass : myElement[$classList].add(class)
 *              That's not apply if $forEach, $toggleClass or $removeClass is
 *              already used, in this case, the best is to use $addClass.
 *
 * @export
 *
 * @param {sting, string[]} className
 * @param {HTMLElement, nodeList, HTMLCollection} element
 */
export function $addClass (className, element) {
  $forEach(function (target) {
    target[elements.$classList].add(...$selectorToArray(className))
  }, element)
}

import { $forEach } from '../../tools/for-each'
import { $selectorToArray } from '../../tools/selector-to-array'
import * as elements from '../../constants/elements'

/**
 * @description Remove class or a list of classes from an HTMLElement or
 *              from all HTMLElement of a nodeList or an HTMLCollection.
 *
 *              If in application, classes are removed only on HTMLELement a few
 *              number of times, the best for minification would be to use this
 *              instead of $removeClass : myElement[$classList].remove(class)
 *              That's not apply if $forEach or $addClass is allready used,
 *              in this case, the best is to use $removeClass.
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

import { $forEach } from '../../tools/for-each'
import { $selectorToArray } from '../../tools/selector-to-array'
import * as elements from '../../constants/elements'

/**
 * @description
 * Remove class or a list of classes from an HTMLElement or
 * from all HTMLElement of a nodeList or an HTMLCollection.
 * 
 * If in the application, classes are removed only on HTMLELement a few
 * number of times, the best for minification would be to use this
 * instead of $removeClass :
 *
 *     myElement[$classList].remove(class)
 *
 * That's not apply if $forEach or other class and attributes manipulators are
 * already used. In this case, the best is to use $removeClass.
 *
 * @example
 * $removeClass('myClass', element)
 * $removeClass(['myClass', 'myOtherClass'], element)
 *
 * @export
 *
 * @param {(string|string[])} classList
 * @param {(HTMLElement|nodeList|HTMLCollection)} element
 */
export function $removeClass (classList, element) {
  $forEach(target => {
    target[elements.$classList].remove(...$selectorToArray(classList))
  }, element)
}

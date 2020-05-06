import { $forEach } from '../../tools/for-each'
import { $selectorToArray } from '../../tools/selector-to-array'
import * as elements from '../../constants/elements'

/**
 * @description
 * Removes a class or a list of classes from an HTMLElement or
 * from all HTMLElement of a nodeList or an HTMLCollection.
 *
 * If in the application, classes are removed only on HTMLELement a few
 * number of times, then the best for minification would be
 * to not use $removeClass, but instead use this :
 *
 *     myElement[$classList].remove(class)
 *     // Or :
 *     myElement['classList'].remove(class)
 *
 * That's doesn't apply if $forEach or other classes
 * and attributes manipulators are
 * already used. In this case, the best is to use $removeClass.
 *
 * @example
 * isi.$removeClass('myClass', element)
 * isi.$removeClass(['myClass', 'myOtherClass'], element)
 *
 * @param {(string|string[])} classList
 * @param {(HTMLElement|nodeList|HTMLCollection)} element
 */
export function $removeClass (classList, element) {
  $forEach(target => {
    target[elements.$classList].remove(...$selectorToArray(classList))
  }, element)
}

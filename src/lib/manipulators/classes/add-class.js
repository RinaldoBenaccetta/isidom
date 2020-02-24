import { $forEach } from '../../tools/for-each'
import { $selectorToArray } from '../../tools/selector-to-array'
import * as elements from '../../constants/elements'

/**
 * @description
 * Add a class or a list of classes to an HTMLElement
 * or to all HTMLElements of a nodeList or an HTMLCollection.
 *
 * To be used like this :
 *
 *     $addClass(classList, element)
 *
 * E.g. :
 *
 *     $addClass('myClass', element)
 *     $addClass(['myClass', 'myOtherClass'], element)
 *
 * If in the application, classes are added only on HTMLELement a few
 * number of times, the best for minification would be to use this
 * instead of $addClass :
 *
 *     myElement[$classList].add(class)
 *
 * That's not apply if $forEach or other class and attributes manipulators are
 * already used. In this case, the best is to use $addClass.
 *
 * @export
 *
 * @param {(string|string[])} classList
 * @param {(HTMLElement|nodeList|HTMLCollection)} element
 */
export function $addClass (classList, element) {
  $forEach(target => {
    target[elements.$classList].add(...$selectorToArray(classList))
  }, element)
}

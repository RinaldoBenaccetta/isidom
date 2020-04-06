import { $forEach } from '../../tools/for-each'
import { $selectorToArray } from '../../tools/selector-to-array'
import * as elements from '../../constants/elements'

/**
 * @description
 * Adds a class or a list of classes to an HTMLElement
 * or to all HTMLElements of a nodeList or an HTMLCollection.
 * 
 * If in the application, classes are added only on HTMLELement a few
 * number of times, then the best for minification would be to not use $addClass, but instead use this :
 *
 *     myElement[$classList].add(class)
 * 
 * That's doesn't apply if $forEach or other classes and attributes manipulators are already used. In this case, the best is to use $addClass.
 *
 * @example
 * $addClass('myClass', element)
 * $addClass(['myClass', 'myOtherClass'], element)
 *
 * @param {(string|string[])} classList
 * @param {(HTMLElement|nodeList|HTMLCollection)} element
 */
export function $addClass (classList, element) {
  $forEach(target => {
    target[elements.$classList].add(...$selectorToArray(classList))
  }, element)
}

import { $forEach } from '../../tools/for-each'
import { $selectorToArray } from '../../tools/selector-to-array'
import * as elements from '../../constants/elements'
/**
 * @description
 * Toggles a class or a list of classes of an HTMLElement
 * or of all HTMLElements of a nodeList or an HTMLCollection.
 *
 * If in application, classes are toggled only on HTMLELement a few
 * number of times, then the best for minification
 * would be to not use $toggleClass, but instead use this :
 *
 *     myElement[$classList].toggle(class)
 *     //Or :
 *     myElement['classList'].toggle(class)
 *
 * That's doesn't apply if $forEach or other classes
 * and attributes manipulators are already used.
 * In this case, the best is to use $toggleClass.
 *
 * @example
 * isi.$toggleClass('myClass', element)
 * isi.$toggleClass(['myClass', 'myOtherClass'], element)
 *
 * @param {(string|string[])} classList
 * @param {(HTMLElement|nodeList|HTMLCollection)} inputElements
 */
export function $toggleClass (classList, inputElements) {
  const CLASSES = $selectorToArray(classList)

  $forEach(element => {
    $forEach(
      classItem => element[elements.$classList].toggle(classItem), CLASSES
    )
  }, inputElements)
}

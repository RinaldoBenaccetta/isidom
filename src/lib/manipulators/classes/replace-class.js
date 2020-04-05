import { $forEach } from '../../tools/for-each'
import * as elements from '../../constants/elements'
import { $cleanSelector } from '../../tools/clean-selector'

/**
 * @description
 * Replace a class by another in an HTMLElement
 * or in all HTMLElements of a nodeList or an HTMLCollection.
 *
 * Based on native element.classList.replace that is not well
 * supported : https://caniuse.com/#search=classlist%20replace.
 * Until it's well supported, the best would be to use $toggleClass
 * on the two classes.
 * 
 * If in the application, classes are replaced only on HTMLELement a
 * few number of times, the best for minification would be to use
 * this instead of $replaceClass :
 *
 *     myElement[$classList].replace('oldClass', 'newClass')
 *
 * That's not apply if $forEach or other class and attributes manipulators are
 * already used. In this case, the best is to use $replaceClass.
 *
 * @example
 * $replaceClass('oldClass', 'newClass', element)
 *
 * @param {string} oldClass
 * @param {string} newClass
 * @param {(HTMLElement|nodeList|HTMLCollection)} element
 */
export function $replaceClass (oldClass, newClass, element) {
  $forEach(target => {
    target[elements.$classList].replace(
      $cleanSelector(oldClass),
      $cleanSelector(newClass)
    )
  }, element)
}

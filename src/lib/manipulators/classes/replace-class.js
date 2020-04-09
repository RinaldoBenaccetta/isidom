import { $forEach } from '../../tools/for-each'
import * as elements from '../../constants/elements'
import { $cleanSelector } from '../../tools/clean-selector'

/**
 * @description
 * Replaces a class by another in an HTMLElement
 * or in all HTMLElements of a nodeList or an HTMLCollection.
 *
 * Based on native element.classList.replace that is not well
 * supported : https://caniuse.com/#search=classlist%20replace.
 * Until it's well supported, the best would be to use $toggleClass
 * on the two classes.
 * 
 * If in the application, classes are replaced only on HTMLELement a
 * few number of times, then the best for minification would be to not use
 * $replaceClass, but instead use this :
 *
 *     myElement[$classList].replace('oldClass', 'newClass')
 *     // Or :
 *     myElement['classList'].replace('oldClass', 'newClass')
 *
 * That's doen't apply if $forEach or other classes and attributes manipulators are already used. In this case, the best is to use $replaceClass.
 *
 * @example
 * isi.$replaceClass('oldClass', 'newClass', element)
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

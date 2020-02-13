import { $forEach } from '../../tools/for-each'
import * as elements from '../../constants/elements'
import { $cleanSelector } from '../../tools/clean-selector'

/**
 * @description Replace a class by another in an HTMLElement
 *              or in all HTMLElements of a nodeList or an HTMLCollection.
 *
 *              Based on native element.classList.replace that is not well
 *              supported : https://caniuse.com/#search=classlist%20replace
 *              Until it's well supported, the best would be to use $toggleClass
 *              on the two classes.
 *
 *              If in application, classes are replaced only on HTMLELement a
 *              few number of times, the best for minification would be to use
 *              this instead of $replaceClass :
 *              myElement[$classList].replace(class)
 *              That's not apply if $forEach, $addClass, $toggleClass
 *              or $removeClass is already used,
 *              in this case, the best is to use $replaceClass.
 *
 * @export
 *
 * @param {string} oldClass
 * @param {string} newClass
 * @param {HTMLElement, nodeList, HTMLCollection} element
 */
export function $replaceClass (oldClass, newClass, element) {
  $forEach(target => {
    target[elements.$classList].replace(
      $cleanSelector(oldClass),
      $cleanSelector(newClass)
    )
  }, element)
}

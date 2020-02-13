import { $forEach } from '../../tools/for-each'
import { $selectorToArray } from '../../tools/selector-to-array'
import * as elements from '../../constants/elements'
/**
 * @description Toggle a class or a list of classes of an HTMLElement
 *              or of all HTMLElements of a nodeList or an HTMLCollection.
 *
 *              If in application, classes are toggled only on HTMLELement a few
 *              number of times, the best for minification would be to use this
 *              instead of $toggleClass : myElement[$classList].toggle(class)
 *              That's not apply if $forEach, $addClass or $removeClass is
 *              already used, in this case, the best is to use $toggleClass.
 *
 * @export
 *
 * @param {*} className
 * @param {*} element
 */
export function $toggleClass (className, element) {
  const CLASSES = $selectorToArray(className)

  $forEach(function (target) {
    for (let i = 0, len = CLASSES.length; i < len; i++) {
      target[elements.$classList].toggle(CLASSES[i])
    }
  }, element)
}

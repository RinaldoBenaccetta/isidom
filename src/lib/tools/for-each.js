import { $isNodeList } from './is-nodelist'
import { $isArray } from './is-array'
import { $isCollection } from './is-collection'

/**
 * @description
 * Replacement for the forEach native Javascript function and based on for loop.
 * To be used like this :
 *
 *     $forEach(functionToExecute}, element)
 *
 * or :
 *
 *     $forEach(itemsInElement => {
 *       itemsInElement.doSomething
 *     }, element)
 *
 * Outside of the DOM elements, the $forEach function does not act
 * on the element itself. E.g. :
 *
 *     let myArray = [1, 2, 3]
 *     $forEach(item => {
 *       items = item * 2
 *     }, myArray)
 *
 * will not transform myArray in [2, 4, 6]. myArray will stay [1, 2, 3].
 *
 * Note that $forEach return nothing.
 *
 * @export
 *
 * @param {function} functionToExecute
 * This is the function that will be executed in the forEach loop.
 *
 * @param {*} element
 * This is the array, the nodelist, the HTMLCollection or the HTMLElement that
 * will be processed by the for loop.
 * If this is not an array, an HTMLCollection or a nodelist,
 * the function will be executed once on the argument. Note : a string is
 * an array of letters.
 */
export function $forEach (functionToExecute, element) {
  if ($isNodeList(element) || $isArray(element) || $isCollection(element)) {
    for (const ITEM of element) {
      functionToExecute(ITEM)
    }
  } else {
    functionToExecute(element)
  }
}

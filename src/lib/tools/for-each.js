import { $isNodeList } from './is-nodelist'
import { $isArray } from './is-array'
import { $isCollection } from './is-collection'

/**
 * @description
 * Replacement based on for loop for the forEach native Javascript function.
 * Note that $forEach return nothing.
 * 
 * @example
 * $forEach(functionToExecute}, element)
 * 
 * // Or :
 * 
 * $forEach(itemsInElement => {
 *     itemsInElement.doSomething
 * }, element)
 *
 * // Note that outside of the DOM elements, the $forEach function does not act
 * // on the element itself.
 * // E.g. :
 * 
 * let myArray = [1, 2, 3]
 * $forEach(item => {
 *     items = item * 2
 * }, myArray)
 *
 * // Will not transform myArray in [2, 4, 6]. myArray will stay [1, 2, 3].
 * // To do that, this code will do the job :
 * 
 * let myArray = [1, 2, 3]
 * let outputArray = []
 * $forEach(item => {
 *     outputArray.push(item * 2)
 * }, myArray)
 * console.log(outputArray) // this should output [2, 4, 6].
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

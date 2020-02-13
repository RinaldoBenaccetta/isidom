import { $isNodeList } from './is-nodelist'
import { $isArray } from './is-array'
import { $isCollection } from './is-collection'

/**
 * @description Replacement for the forEach native function from Javascript
 *              based on for loop.
 *              eg. :
 *                $forEach(itemsInElement => {
 *                  itemsInElement.doThings
 *                }, element)
 *
 * @export
 *
 * @param {function} functionToExecute This is the function that will be
 *                                     executed in the forEach loop.
 *
 * @param {*} element This is the nodelist, the nodeList or the HTMLCollection
 *                    that will be processed by the for loop.
 *                    If this is not an array an HTMLCollection or a nodelist,
 *                    the function will be executed once on the argument.
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

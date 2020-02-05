import { $isNodeList } from './is-nodelist'
import { $isArray } from './is-array'

/**
 * @description Basic replacement for the forEach native function from Javascript.
 *
 * @export
 *
 * @param {function} functionToExecute This is the function that will be executed in the forEach loop.
 *
 * @param {*} element This is the array or the nodelist that will be processed by the forEach loop.
 *                    If this is not an array or a nodelist, the function will be executed once on the argument.
 */
export function $forEach (functionToExecute, element) {
  if ($isNodeList(element) || $isArray(element)) {
    element.forEach(function (item) {
      functionToExecute(item)
    })
  } else {
    functionToExecute(element)
  }
}

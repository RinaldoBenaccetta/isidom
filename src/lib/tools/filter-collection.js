import * as values from '../constants/values'

/**
 * @description Filter an HTMLCollection and return an array with the fitered HTMLElements.
 *
 * @export
 *
 * @param {string} filter The filter like in querySelector
 * @param {HTMLElement} element
 *
 * @returns
 */
export function $filterCollection (filter, element) {
  var output = []
  for (var i = 0; i < element.length; i++) {
    // if nodetype is an element and match selector : push the element in the array
    if (element[i].nodeType === 1 && element[i].matches(filter)) {
      output.push(element[i])
    }
  }

  return output.length > 0 ? output : values.$null
}

import * as values from '../constants/values'

/**
 * @description
 * Filters an HTMLCollection and returns an array with the fitered HTMLElements.
 * Returns null if nothing matches the filter.
 * 
 * @example
 * let a = $filterCollection("div.myClass input[name='myName']", myElement)
 *
 * @param {string} filter
 * The filter like in querySelector :
 *  https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
 * @param {HTMLElement} element
 *
 * @returns {Array|null}
 * An array of HTMLElement.
 */
export function $filterCollection (filter, element) {
  var output = []
  for (var i = 0; i < element.length; i++) {
    // if nodetype is an element and match selector :
    // push the element in the array
    if (element[i].nodeType === 1 && element[i].matches(filter)) {
      output.push(element[i])
    }
  }

  return output.length > 0 ? output : values.$null
}

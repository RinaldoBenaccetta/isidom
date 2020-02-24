import * as values from '../constants/values'

/**
 * @description
 * Filter an HTMLCollection and return an array with the fitered HTMLElements.
 * Return null if nothing is matching the filter.
 *
 * To be used like this :
 *
 *     let a = $filterCollection("div.myClass input[name='myName']", myElement)
 *
 * @export
 *
 * @param {string} filter
 * The filter like in querySelector :
 *  https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
 * @param {HTMLElement} element
 *
 * @returns {array|null}
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

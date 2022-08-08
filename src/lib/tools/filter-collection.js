import * as values from '../constants/values'

/**
 * @description
 * Filters an HTMLCollection and returns an array with the fitered HTMLElements.
 * Returns null if nothing matches the filter.
 *
 * @example
 * let a = isi.$filterCollection("div.myClass input[name='myName']", myElement)
 *
 * @param {string} filter
 * The filter like in querySelector :
 *  https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
 * @param {HTMLCollection} collection
 *
 * @returns {Array|null}
 * An array of HTMLElement.
 */
export function $filterCollection (filter, collection) {
  // const OUTPUT = []
  // for (let i = 0; i < collection.length; i++) {
  //   // if nodeType is an element and match selector :
  //   // push the element in the array
  //   if (collection[i].nodeType === 1 && collection[i].matches(filter)) {
  //     OUTPUT.push(collection[i])
  //   }
  // }

  const OUTPUT = Array.from(collection).filter(
    // if nodeType is an element and match selector
    item => item.nodeType === 1 && item.matches(filter)
  )

  return OUTPUT.length > 0 ? OUTPUT : values.$null
}

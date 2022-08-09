import * as values from '../constants/values'
import { $isHtmlElement } from './is-html-element'

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
export const $filterCollection = (filter, collection) => {
  const OUTPUT = Array.from(collection).filter(
    // if nodeType is an html element and match selector
    item => $isHtmlElement(item) && item.matches(filter)
  )

  return OUTPUT.length > 0 ? OUTPUT : values.$null
}

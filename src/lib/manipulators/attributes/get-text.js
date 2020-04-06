/**
 * @description
 * Returns the text value of the specified HTMLElement.
 *
 * @example
 * let a = $getText(element)
 *
 * @param {HTMLElement} element
 *
 * @returns {string}
 */
export function $getText (element) {
  return element.textContent
}

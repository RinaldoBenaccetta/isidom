/**
 * @description
 * Return the text value of the specified HTMLElement.
 *
 * @example
 * let a = $getText(element)
 *
 * @export
 *
 * @param {HTMLElement} element
 *
 * @returns {string}
 */
export function $getText (element) {
  return element.textContent
}

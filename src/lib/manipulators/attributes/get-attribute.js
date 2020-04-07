/**
 * @description
 * Shortcut for getAttribute vannilla JS method.
 * Returns the specified attribute of the specified HTMLElement.
 *
 * @example
 * let a = isi.$getAttribute('attribute', element)
 *
 * @param {string} attribute
 * @param {HTMLElement} element
 *
 * @returns {string}
 */
export function $getAttribute (attribute, element) {
  return element.getAttribute(attribute)
}

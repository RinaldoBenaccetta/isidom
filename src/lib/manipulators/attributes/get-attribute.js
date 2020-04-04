/**
 * @description
 * Shortcut for getAttribute vannilla JS method.
 * Return the specified attribute of the specified HTMLElement.
 *
 * @example
 * let a = $getAttribute('attribute', element)
 *
 * @export
 *
 * @param {string} attribute
 * @param {HTMLElement} element
 *
 * @returns {string}
 */
export function $getAttribute (attribute, element) {
  return element.getAttribute(attribute)
}

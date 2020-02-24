/**
 * @description
 * Shortcut for getAttribute vannilla JS method.
 * Return the specified attribute of the specified HTMLElement.
 *
 * To be used like this :
 *
 *     let a = $getAttribute('attribute', element)
 *
 * @export
 *
 * @param {string} attribute
 * @param {HTMLElement} element
 *
 * @returns
 */
export function $getAttribute (attribute, element) {
  return element.getAttribute(attribute)
}

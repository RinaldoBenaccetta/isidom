/**
 * @description Shortcut for getAttribute vannilla JS method.
 *              Return the specified attribute of the specified HTMLElement.
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

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
export const $getAttribute = (attribute, element) =>
  element.getAttribute(attribute)

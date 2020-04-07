/**
 * @description
 * Replaces the specified HTMLElement's text by the new specified one.
 *
 * @example
 * isi.$setText('text', element)
 *
 * @param {string} text
 * @param {HTMLElement} element
 */
export function $setText (text, element) {
  element.textContent = text
}

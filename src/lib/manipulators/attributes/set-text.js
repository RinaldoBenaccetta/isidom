/**
 * @description
 * Replace the specified HTMLElement's text by the new specified one.
 *
 * @example
 * $setText('text', element)
 *
 * @export
 *
 * @param {string} text
 * @param {HTMLElement} element
 */
export function $setText (text, element) {
  element.textContent = text
}

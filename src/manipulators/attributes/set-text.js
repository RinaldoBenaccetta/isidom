/**
 * @description replace the specified HTMLElement's text
 *              by the new specified one.
 *
 * @export
 *
 * @param {string} text
 * @param {HTMLElement} element
 */
export function $setText (text, element) {
  element.textContent = text
}

/**
 * @description
 * Replace the specified HTMLElement's text by the new specified one.
 *
 * To be used like this :
 *
 *     $setText('text', element)
 *
 * @export
 *
 * @param {string} text
 * @param {HTMLElement} element
 */
export function $setText (text, element) {
  element.textContent = text
}

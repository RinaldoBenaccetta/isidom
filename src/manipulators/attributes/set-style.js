/**
 * @description Add or replace specified style's value
 *              to the specified HTMLElement.
 *
 * @export
 *
 * @param {string} value
 * @param {string} property The style property : the css-property's constants
 *                          can be used for maximum minification when used
 *                          several times. In this case, the "js" prefixed
 *                          constants must be used.
 * @param {HTMLElement} element
 *
 * @returns
 */
export function $setStyle (value, property, element) {
  return (element.style[property] = value)
}

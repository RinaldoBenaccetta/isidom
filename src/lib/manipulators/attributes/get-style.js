/**
 * @description Get the value of the specified style
 *              of the specified HTMLElement.
 *
 * @export
 *
 * @param {string} property The style property : the css-property's constants
 *                          can be used for maximum minification when used
 *                          several times. In this case, the "js" prefixed
 *                          constants must be used.
 * @param {HTMLElement} element
 *
 * @returns
 */
export function $getStyle (property, element) {
  return element.style[property]
}

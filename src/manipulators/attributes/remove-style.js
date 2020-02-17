/**
 * @description Remove the specified style of the specified HTMLElement.
 *
 * @export
 *
 * @param {string} property The style property : the css-property's constants
 *                          can be used for maximum minification when used
 *                          several times. In this case,
 *                          unlike $setStyle and $getStylethe, "css" prefixed
 *                          constants must be used.
 * @param {HTMLElement} element
 */
export function $removeStyle (property, element) {
  element.style.removeProperty([property])
}

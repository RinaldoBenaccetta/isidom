/**
 * @description
 * Remove the specified style of the specified HTMLElement.
 *
 * The property must be in CSS like, E.g. : 'background-color'.
 *
 * If Isi's constants are used, the $css prefixed ones must be used.
 * E.g. : $cssBackgroundColor instead of $jsBackgroundColor.
 *
 * To be used like this :
 *
 *     $removeStyle(property, element)
 *
 * E.g. :
 *
 *     $setStyle('background-color', element)
 *     // or
 *     $setStyle($cssBackgroundColor, element)
 *
 * Will remove the background-color style of the element.
 *
 * @export
 *
 * @param {string} property
 * The style property : the css-property's constants can be used
 * for maximum minification when used several times.
 * In this case, unlike $setStyle and $getStyle,
 * $css prefixed constants must be used.
 * @param {HTMLElement} element
 */
export function $removeStyle (property, element) {
  element.style.removeProperty([property])
}

/**
 * @description
 * Removes the specified style of the specified HTMLElement.
 *
 * The property must be in CSS like, E.g. : 'background-color'.
 *
 * If Isi's constants are used, the $css prefixed ones must be used.
 * E.g. : $cssBackgroundColor instead of $jsBackgroundColor.
 *
 * @example
 * isi.$removeStyle(property, element)
 *
 * // E.g. :
 *
 * isi.$setStyle('background-color', element)
 *
 * // or
 *
 * isi.$setStyle($cssBackgroundColor, element)
 *
 * // Will remove the background-color style of the element.
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

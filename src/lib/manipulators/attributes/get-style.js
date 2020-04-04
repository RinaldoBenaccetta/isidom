/**
 * @description
 * Get the value of the specified style of the specified HTMLElement.
 *
 * The property must be in JS camel case like :
 * 'backgroundColor' for the 'background-color' CSS property.
 *
 * If Isi's constants are used, the $js prefixed ones must be used.
 * E.g. : $jsBackgroundColor instead of $cssBackgroundColor.
 *
 * @example
 * let a = $getStyle(property, element)
 *
 * // E.g. :
 *
 * let a = $getStyle('backgroundColor', element)
 * 
 * // or
 * 
 * let a = $getStyle($jsBackgroundColor, element)
 *
 * // Will return the background-color of the element.
 *
 * @export
 *
 * @param {string} property
 * The style property : the css-property's constants can be used for maximum
 * minification when used several times. In this case,
 * the $js prefixed constants must be used.
 * @param {HTMLElement} element
 *
 * @returns
 */
export function $getStyle (property, element) {
  return element.style[property]
}

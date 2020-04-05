/**
 * @description
 * Add or replace specified style's value to the specified HTMLElement.
 *
 * The property must be in JS camel case like :
 * 'backgroundColor' for the 'background-color' CSS property.
 *
 * If Isi's constants are used, the $js prefixed ones must be used.
 * E.g. : $jsBackgroundColor instead of $cssBackgroundColor.
 *
 * @example
 * $setStyle(value, property, element)
 *
 * // E.g. :
 *
 * $setStyle('red', 'backgroundColor', element)
 * 
 * // or
 * 
 * $setStyle('red', $jsBackgroundColor, element)
 * 
 *
 * // Will set the background-color of the element.
 *
 * @param {string} value
 * @param {string} property
 * The style property : the css-property's constants can be used
 * for maximum minification when used several times.
 * In this case, the $js prefixed constants must be used.
 * @param {HTMLElement} element
 *
 * @returns
 */
export function $setStyle (value, property, element) {
  return (element.style[property] = value)
}

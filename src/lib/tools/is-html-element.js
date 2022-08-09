/**
 * @description
 * Checks if input is an HTMLelement and returns true or false.
 *
 * @example
 * if(isi.$isHtmlElement(input)) { make something }
 *
 * @param {*} input
 *
 * @returns {boolean}
 */
export const $isHtmlElement = input => input.nodeType === 1

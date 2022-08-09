/**
 * @description
 * Checks if input is a nodeList and returns true or false.
 *
 * @example
 * if(isi.$isNodeList(input)) { make something }
 *
 * @param {*} input
 *
 * @returns {boolean}
 */
export const $isNodeList = input => input instanceof NodeList

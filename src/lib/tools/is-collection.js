/**
 * @description
 * Checks if input is an HTMLcollection and returns true or false.
 *
 * @example
 * if(isi.$isCollection(input)) { make something }
 *
 * @param {*} input
 *
 * @returns {boolean}
 */
export const $isCollection = input => input instanceof HTMLCollection

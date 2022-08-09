import * as constant from '../constants/values'

/**
 * @description
 * Replacement for : typeof variable === 'undefined'
 *
 * @example
 * // instead of this :
 * typeof variable === 'undefined'
 *
 * // Use this :
 * if(isi.$isUndefined(variable)) { make something }
 *
 * @param {*} variable
 *
 * @returns {boolean}
 */
// eslint-disable-next-line valid-typeof
export const $isUndefined = variable => typeof variable === constant._$undefined

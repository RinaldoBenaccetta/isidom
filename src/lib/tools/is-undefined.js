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
export function $isUndefined (variable) {
  // eslint-disable-next-line valid-typeof
  return typeof variable === constant._$undefined
}

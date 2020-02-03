import * as constant from '../constants/common_values'

/**
 * @description Replacement for typeof x === 'undefined'
 *              To be used like this : if(isUndefined(x)) then ...
 * @export
 * @param {*} variable
 * @returns {boolean}
 */
export function $isUndefined (variable) {
  // eslint-disable-next-line valid-typeof
  return typeof variable === constant.$$undefined
}

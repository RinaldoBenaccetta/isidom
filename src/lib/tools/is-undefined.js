import * as constant from '../constants/values'

/**
 * @description Replacement for :
 *
 *     typeof variable === 'undefined'
 *
 * To be used like this :
 *
 *     if($isUndefined(variable)) { do something }
 *
 * @export
 *
 * @param {*} variable
 *
 * @returns {boolean}
 */
export function $isUndefined (variable) {
  // eslint-disable-next-line valid-typeof
  return typeof variable === constant._$undefined
}

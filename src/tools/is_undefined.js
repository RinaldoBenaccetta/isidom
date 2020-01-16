/**
 * @description Replacement for typeof x === 'undefined'
 *              To be used like this : if(isUndefined(x)) then ...
 * @export
 * @param {*} variable
 * @returns {boolean}
 */
export function $isUndefined(variable) {
    return typeof variable === $$undefined;
}
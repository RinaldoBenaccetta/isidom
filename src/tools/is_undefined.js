
import {$$undefined} from "../constants/common_values";

/**
 * @description Replacement for typeof x === 'undefined'
 *              To be used like this : if(isUndefined(x)) then ...
 * @export
 * @param {*} variable
 * @returns {boolean}
 */
export default function(variable) {
    //import * as values from "../constants/common_values";
    //const $$undefined = "undefined";
//export function $isUndefined(variable) {
    // import $$undefined from "../constants/common_values";
    return typeof variable === $$undefined;
}

// export function $isUndefined(variable) {
//     //import * as values from "../constants/common_values";
//     const $$undefined = "undefined";
//     return typeof variable === $$undefined;
// }

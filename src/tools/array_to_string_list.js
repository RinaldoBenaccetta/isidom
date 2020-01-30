import * as constant from "../constants/common_values";
import {$isArray} from "../tools/is_array.js";
import {$selectorClean} from "../tools/selector_clean";

/**
 * @description Return a string concatened from an array of string.
 * 
 *              Each string from the array will be transformed in a class name
 *              if 'arg' is set to true. eg. : 'myClass' become '.myClass',
 *              '.myClass' stay '.myClass'
 * 
 *              Spaces from the start of the string will be removed.
 * 
 * @param {string, string[]} input A string value will output the same string with '.'
 *                                 or ' ' at start according to the argument 'arg' received.
 * @param {boolean=} [arg=true] optional, true will set separator as '.'
 *                              and false will set separator as ' '
 * 
 * @returns 
 */
export function $arrayToStringList(input, arg = constant.$$true) {
  let separator = arg === constant.$$true ? "." : " ";

  if ($isArray(input)) {
    for (let i = 0, len = input.length; i < len; i++) {
      input[i] = $selectorClean(input[i]);
    }
    //return separator + input.join(separator);
    return (separator + input.join(separator)).trim();
  }

  return (separator + $selectorClean(input)).trim();
  
}

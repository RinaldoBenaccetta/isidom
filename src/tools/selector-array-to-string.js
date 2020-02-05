import * as constant from '../constants/values'
import { $selectorArrayClean } from './selector-array-clean'

/**
 * @description Return a string concatened from an array of string.
 *
 *              Each string from the array will be transformed in a class name
 *              if 'arg' is set to true. eg. : 'myClass' become '.myClass',
 *              '.myClass' stay '.myClass'
 *
 *              Spaces from start and end of strings will be removed.
 *
 * @param {string, string[]} input A string value will output the same string with or
 *                                 without '.' at start according to the argument 'arg' received.
 *                                 An array of string will return a concatened string with
 *                                 or without '.' at start according to the argument 'arg' received.
 * @param {boolean=} [arg=true] optional, true will set separator as '.'
 *                              and false will set separator as ' '
 *
 * @returns {string}
 */
export function $selectorArrayToString (input, arg = constant.$true) {
  const SEPARATOR = arg === constant.$true ? '.' : ' '
  input = $selectorArrayClean(input)
  return (SEPARATOR + input.join(SEPARATOR)).trim()
}
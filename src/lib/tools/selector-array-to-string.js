import * as constant from '../constants/values'
import { $selectorToArray } from './selector-to-array'

/**
 * @description
 * Returns a string concatened from an array of strings.
 *
 * Each string from the array will be transformed in a class name
 * if 'dot' is set to true. e.g. : 'myClass' becomes '.myClass',
 * '.myClass' stays '.myClass'.
 * 
 * If 'dot' is set to false, any dot in class name will be removed.
 * e.g. : '.myClass' becomes 'myClass'.
 *
 * Spaces from start and end of strings will be removed.
 *
 * @example
 * let a = $selectorArrayToString(input, false)
 *
 * @param {string|string[]} input
 * A string value will output the same string with or without '.' at start
 * according to the argument 'dot' received. An array of strings will return
 * a concatened string with or without '.' at start according
 * to the argument 'dot' received.
 * @param {boolean=} [dot=true]
 * true will set separator as '.' and false will set separator as a space.
 *
 * @returns {string}
 */
export function $selectorArrayToString (input, dot = constant.$true) {
  const SEPARATOR = dot === constant.$true ? '.' : ' '
  input = $selectorToArray(input)
  return (SEPARATOR + input.join(SEPARATOR)).trim()
}

import { $isArray } from './is-array'
import { $cleanSelector } from './clean-selector'

/**
 * @description
 * Return an array of strings without '.' and '#' at start of strings.
 *
 * The spaces at the start and end of the string will be removed.
 *
 * A string return an array with the string as the only item in the array.
 *
 * To be used like this :
 *
 *     let a = $selectorToArray(input)
 *
 * @export
 *
 * @param {string, string[]} input
 *
 * @returns  {string[]}
 */
export function $selectorToArray (input) {
  if ($isArray(input)) {
    for (let i = 0, len = input.length; i < len; i++) {
      input[i] = $cleanSelector(input[i])
    }
    return input
  }
  return [$cleanSelector(input)]
}

import { $isArray } from './is-array'
import { $selectorClean } from './selector-clean'

/**
 * @description Return an array of strings without '.' and '#' at start of strings.
 *              The spaces at the start and end of the string will be removed.
 *              A string return an array with the string in it.
 *
 * @export
 *
 * @param {string, string[]} input
 *
 * @returns  {string[]}
 */
export function $selectorArrayClean (input) {
  if ($isArray(input)) {
    for (let i = 0, len = input.length; i < len; i++) {
      input[i] = $selectorClean(input[i])
    }
    return input
  }
  return [$selectorClean(input)]
}

import { $isArray } from './is-array'
import { $cleanSelector } from './clean-selector'

/**
 * @description
 * Returns an array of strings without '.' and '#' at start of strings.
 *
 * The spaces at the start and end of the string will be removed.
 *
 * A sole string will return an array with the string as the only item in the array.
 *
 * @example
 * let a = isi.$selectorToArray(input)
 *
 * @param {string|string[]} input
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

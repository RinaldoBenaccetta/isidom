import { $cleanSelector } from '../tools/clean-selector'
import * as elements from '../constants/elements'

/**
 * @description
 * Return an HTMLElement based on getElementById.
 * Return null if nothing is found.
 *
 * @example
 * let a = $byId('id')
 *
 * @export
 *
 * @param {string} id
 * The string and strings in array can start with a # or not.
 * The string and strings in array can have spaces at start an end.
 *
 * @returns {HTMLElement|null}
 */
export function $byId (id) {
  return elements.$document.getElementById($cleanSelector(id))
}

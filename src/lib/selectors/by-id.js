import { $cleanSelector } from '../tools/clean-selector'
import * as elements from '../constants/elements'

/**
 * @description
 * Returns an HTMLElement based on getElementById.
 * Returns null if nothing is found.
 *
 * @example
 * let a = isi.$byId('id')
 *
 * @param {string} id
 * The string can start with a # or not.
 * The string can have spaces at start an end.
 *
 * @returns {HTMLElement|null}
 */
export function $byId (id) {
  return elements.$document.getElementById($cleanSelector(id))
}

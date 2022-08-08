/**
 * @description
 * Removes '.' and '#' from start of selectors names.
 *
 * '.myClass' becomes 'myClass' and '#myId' becomes 'myId'.
 *
 * The spaces at the start and end of the string will be removed.
 *
 * @example
 * let a = isi.$cleanSelector(myElement)
 *
 * @param {string} selector
 *
 * @returns {string}
 */
export function $cleanSelector (selector) {
  selector = selector.trim()

  return selector.charAt(0) === '#' || selector.charAt(0) === '.'
    ? selector.slice(1)
    : selector
}

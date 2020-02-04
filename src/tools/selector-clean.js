/**
 * @description Remove '.' and '#' from start of selectors names.
 *              '.myClass' become 'myClass' and '#myId' become 'myId'
 *              The spaces at the start and end of the string will be removed.
 *
 * @param {string} selector
 *
 * @returns {string}
 */
export function $selectorClean (selector) {
  selector = selector.trim()
  if (selector.charAt(0) === '#' || selector.charAt(0) === '.') {
    selector = selector.substr(1)
  }
  return selector
}

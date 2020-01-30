/**
 * @description Remove '.' and '#' from start of selectors names.
 *              '.myClass' become 'myClass' and '#myId' become 'myId'
 * @param {string} selector
 * @returns 
 */
export function $selectorClean(selector) {
  if (selector.charAt(0) === "#" || selector.charAt(0) === ".") {
    selector = selector.substr(1);
  }
  return selector;
}

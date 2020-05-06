/**
 * @description
 * Replaces native JS property element.parentElement.
 * (https://developer.mozilla.org/en-US/docs/Web/API/Node/parentElement)
 *
 * Returns an HTMLElement Which is the parent of the specified HTMLElement.
 *
 * @example
 * let a = isi.$findParent(element)
 *
 * @param {HTMLElement} element
 *
 * @returns {HTMLElement}
 */
export function $findParent (element) {
  return element.parentElement
}

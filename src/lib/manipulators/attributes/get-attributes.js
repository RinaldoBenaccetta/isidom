/**
 * @description
 * Returns an object filled with all attributes and values of
 * the specified HTMLElement.
 *
 * @example
 * let a = $getAttributes(element)
 *
 * // The returned object is like this :
 *
 * {
 *     id: 'myId',
 *     class: 'myClass',
 *     type: 'range'
 * }
 *
 * // The values can then be accessed like this :
 *
 * a.id
 * a.class
 * a.type
 *
 * // The data can be directly accessed like this :
 *
 * let a = isi.$getAttributes(element).type
 *
 * // But in this case, the best would be to use the $getAttribute function
 * // instead of $getAttributes.
 *
 * @param {HTMLElement} element
 *
 * @returns {Object}
*/
export const $getAttributes = element => {
  const OUTPUT = {}
  for (const attribute of element.attributes) {
    OUTPUT[attribute.nodeName] = attribute.nodeValue
  }

  return OUTPUT
}

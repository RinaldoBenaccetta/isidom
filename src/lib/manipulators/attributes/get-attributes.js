/**
 * @description
 * Return an object filled with all attributes and values of
 * the specified HTMLElement.
 *
 * To be used like this :
 *
 *     let a = $getAttributes(element)
 *
 * The returned object is like this :
 *
 *     {
 *      id: 'myId'
 *      class: 'myClass'
 *      type: 'range'
 *     }
 *
 * The values can then be accessed like this :
 *
 *     a.id
 *     a.class
 *     a.type
 *
 * The datas can be directly accessed like this :
 *
 *     let a = $getAttributes(element).type
 *
 * But in this case, the best would be to use the $getAttribute function instead
 * of $getAttributes.
 *
 * @export
 *
 * @param {HTMLElement} element
 *
 * @returns {Object}
 */
export function $getAttributes (element) {
  const OUTPUT = {}
  for (let i = 0, attributes = element.attributes; i < attributes.length; i++) {
    OUTPUT[attributes[i].nodeName] = attributes[i].nodeValue
  }

  return OUTPUT
}

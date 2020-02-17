/**
 * @description Return an object filled with all attributes and values of
 *              a specified HTMLElement.
 *              The returned object is like this :
 *                {
 *                    id: 'myId'
 *                    class: 'myClass'
 *                    type: 'range'
 *                }
 *              The data can be accessed like this :
 *                $getAttributes(element).type
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

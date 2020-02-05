import * as mod from '../../tools/is-nodelist'

describe('$isNodeList', () => {
  describe('given a nodeList', () => {
    test('is nodelist', () => {
      const nodeList = document.querySelectorAll('div')
      expect(mod.$isNodeList(nodeList)).toBeTruthy()
    })
  })

  describe('given an htmlCollection', () => {
    test('is not a nodeList', () => {
      const htmlCollection = document.getElementsByTagName('div')
      expect(mod.$isNodeList(htmlCollection)).toBeFalsy()
    })
  })
})

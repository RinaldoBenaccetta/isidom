import * as mod from '../../index'

describe('$isNodeList', () => {
  describe('given a nodeList', () => {
    test('is nodeList', () => {
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

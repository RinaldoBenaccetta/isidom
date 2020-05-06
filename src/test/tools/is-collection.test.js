import { $isCollection } from '../../index'

describe('$isCollection', () => {
  describe('given a nodeList', () => {
    test('is nodelist', () => {
      const nodeList = document.querySelectorAll('div')
      expect($isCollection(nodeList)).toBeFalsy()
    })
  })

  describe('given an htmlCollection', () => {
    test('is not a nodeList', () => {
      const htmlCollection = document.getElementsByTagName('div')
      expect($isCollection(htmlCollection)).toBeTruthy()
    })
  })
})

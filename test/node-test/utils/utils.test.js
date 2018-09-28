const utils = require('./utils')
const expect = require('expect')

describe('Utils',() => {
  describe('#add', () => {
    it('should be add two number', () => {
      const result = utils.add(2,3)
      expect(result)
        .toBe(5)
        .toBeA('number')
    })
    it('should add async', (done) => {
      utils.addAsync(3,4, (sum) => {
        expect(sum).toBe(7)
        done()
      })
    })
  })
 describe('#square', () => {
   it('should be square number', () => {
     const result = utils.square(3)
     expect(result)
       .toBe(9)
       .toBeA('number')
   })
   it('should be async square', (done) =>  {
     utils.squareAsync(5,(sum) => {
       expect(sum).toBe(25)
       done()
     })
   })
 })
 })




describe('Build a tower:', function () {
  let towerBuilder = require('../../challenges/towerBuilder')
  
  let tower1 = ['  *  ', ' *** ', '*****']
  let tower2 = ['     *     ', '    ***    ', '   *****   ', '  *******  ', ' ********* ', '***********']
  
  it("Return a tower of 3 floors", function () {
    expect(towerBuilder(3)).toEqual(tower1)
  })
  
  it("Return a tower of 6 floors", function () {
    expect(towerBuilder(6)).toEqual(tower2)
  })
})

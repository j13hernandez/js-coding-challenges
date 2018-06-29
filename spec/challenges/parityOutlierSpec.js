describe('Parity Outlier:', function () {
  let parityOutlier = require('../../challenges/parityOutlier')
  
  let evenOut = [160, 3, 1719, 19, 11, 13, -21]
  let oddOut = [2, 4, 0, 100, 4, 11, 2602, 36]
  
  it('Expected the even outlier to return', function () {
    expect(parityOutlier(evenOut)).toEqual(160)
  })
  
  it('Expected the odd outlier to return', function () {
    expect(parityOutlier(oddOut)).toEqual(11)
  })
})

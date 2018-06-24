describe("Check numbers:", function() {
  let checkNums = require('../../challenges/checkNums')

  beforeEach(function() {
  })

  it("Num2 is greater than Num1, hence return true", function() {
    expect(checkNums(1, 2)).toEqual(true)
  })
  
  it("Num2 is not greater than Num1, hence return false", function() {
    expect(checkNums(2, 1)).toEqual(false)
  })
  
  it("Num 2 = Num1, hence return -1", function() {
    expect(checkNums(2, 2)).toEqual('-1')
  })
})

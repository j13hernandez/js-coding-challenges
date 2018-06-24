describe("Return the factorial of number:", function() {
  let firstFactorial = require('../../challenges/firstFactorial')
  
  it("The factoral of 4 equals 24", function () {
    expect(firstFactorial(4)).toEqual(4 * 3 * 2 * 1)
  })
  
  it("The factoral of 6 equals 720", function () {
    expect(firstFactorial(6)).toEqual(6 * 5 * 4 * 3 * 2 * 1)
  })
  
  it("The factoral of 8 equals 40320", function () {
    expect(firstFactorial(8)).toEqual(8* 7 * 6 * 5 * 4 * 3 * 2 * 1)
  })
})

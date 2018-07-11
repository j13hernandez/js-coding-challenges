describe("Narcissistic Number:", function() {
  let narcNumber = require('../../challenges/narcNumber')
  
  it("1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153 ... True", function () {
    expect(narcNumber(153)).toEqual(true)
  })
  
  it("1^4 + 6^4 + 3^4 + 4^4 = 1 + 1296 + 81 + 256 = 1634 ... True", function () {
    expect(narcNumber(1634)).toEqual(true)
  })
  
  it("30694 is not narcissistic", function () {
    expect(narcNumber(30694)).toEqual(false)
  })
  
  it("42633 is not narcissistic", function () {
    expect(narcNumber(42633)).toEqual(false)
  })
})

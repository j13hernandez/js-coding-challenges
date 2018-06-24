describe("Simple adding:", function () {
  let simpleAdding = require("../../challenges/simpleAdding")
  
  let four = 4+3+2+1
  let six = 6+5+4+3+2+1
  let ten = 10+9+8+7+6+5+4+3+2+1
  
  it("Add up all the numbers from 1 to 4", function () {
    expect(simpleAdding(4)).toEqual(four)
  })
  
  it("Add up all the numbers from 1 to 6", function () {
    expect(simpleAdding(6)).toEqual(six)
  })
  
  it("Add up all the numbers from 1 to 10", function () {
    expect(simpleAdding(10)).toEqual(ten)
  })
})

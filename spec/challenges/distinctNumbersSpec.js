describe("Find distinct number:", function() {
  let distNum = require('../../challenges/distinctNumbers')
  
  it("Return distinct number between 1, 2, 1", function() {
    expect(distNum(1, 2, 1)).toEqual(2)
  })
  
  it("Return distinct number between 10, 3, 3", function() {
    expect(distNum(10, 3, 3)).toEqual(10)
  })
  
  it("Return distinct number between 54, 54, 95", function() {
    expect(distNum(54, 54, 95)).toEqual(95)
  })
})

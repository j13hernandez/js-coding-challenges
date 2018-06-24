describe("Reverse the string:", function() {
  let firstReverse = require('../../challenges/firstReverse')
  
  let str1 = 'Hello World and Coders'
  
  it("Reverse 'Hello World and Coders'", function () {
    expect(firstReverse(str1)).toEqual("sredoC dna dlroW olleH")
  })
})

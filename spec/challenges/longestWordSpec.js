describe("Return longest word in the string", function () {
  let longestWord = require("../../challenges/longestWord")
  
  let str1 = "The longest word in the english language is pneumonoultramicroscopicsilicovolcanoconiosis"
  
  it('Function should return longest word in the string',
  function () {
    expect(longestWord(str1)).toEqual('pneumonoultramicroscopicsilicovolcanoconiosis')
  })
})

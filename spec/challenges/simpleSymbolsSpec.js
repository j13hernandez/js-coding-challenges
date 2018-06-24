describe("Simple symbols:", function () {
  let simpleSymbols = require("../../challenges/simpleSymbols")
  
  let str1 = '++d+===+c++==a'
  
  let str2 = '++d+===+c++==+a+'
  
  it('Return true since each letter in string is surrouned by a + symbol',
    function () {
      expect(simpleSymbols(str2)).toEqual(true)
    })
    
    it('Return false since each letter in string is not surrouned by a + symbol',
      function () {
        expect(simpleSymbols(str1)).toEqual(false)
      })
})

describe('Alphabet soup:', function () {
  let alphabetSoup = require('../../challenges/alphabetSoup')
  
  let str1 = 'waddup'
  let str2 = 'hello'
  
  it('waddup should be returned in alphabetical order as addpuW',
    function () {
    expect(alphabetSoup(str1)).toEqual('addpuw')
  })
  
  it('hello should be returned in alphabetical order as ehllo',
    function () {
    expect(alphabetSoup(str2)).toEqual('ehllo')
  })
})

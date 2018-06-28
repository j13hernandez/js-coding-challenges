describe('Alphabet soup:', function () {
  let alphabetSoup = require('../../challenges/alphabetSoup')
  
  let str = 'Hello'
  
  it('Hello should be returned in alphabetical order as eHllo',
    function () {
    expect(alphabetSoup(str)).toEqual('eHllo')
  })
})

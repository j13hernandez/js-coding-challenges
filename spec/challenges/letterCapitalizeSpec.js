describe('Capitalize first letter of words:', function () {
  let letterCapitalize = require('../../challenges/letterCapitalize')
  
  let str1 = 'every first letter of a word in this string should be capitalize'
  
  it('Every first letter of a word in this string should be capitalize',
  function () {
    expect(letterCapitalize(str1))
      .toEqual('Every First Letter Of A Word In This String Should Be Capitalize')
  })
})

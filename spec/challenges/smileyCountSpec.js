describe('Count valid smileys:', function () {
  let smileyCount = require('../../challenges/smileyCount')
  
  let smileys1 = [':)', ':D', '=D', ':P']
  let smileys2 = [':]', ':)', ':D', ':>', ';(', ';-D', ':~)']
  let smileys3 = [
    ':]', ':)', ':D', ':>', ';(', ';-D', ':~)', ':)', ':D', '=D', ':P'
  ]
  
  it('There are 2 valid smileys in this array', function () {
    expect(smileyCount(smileys1)).toEqual(2)
  })
  
  it('There are 4 valid smileys in this array', function () {
    expect(smileyCount(smileys2)).toEqual(4)
  })
  
  it('There are 6 valid smileys in this array', function () {
    expect(smileyCount(smileys3)).toEqual(6)
  })
})

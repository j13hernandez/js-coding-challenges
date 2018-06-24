describe('Letter change:', function () {
  let letterChanges = require("../../challenges/letterChanges")
  
  let str1 = "Letters will change abce ABCE"
  
  it('Letters should change to the letter following it in the alphabet.',
  function () {
    expect(letterChanges(str1))
    .toEqual('MfUUfst xjmm dIbOhf bcdf BCDF')
  })
})

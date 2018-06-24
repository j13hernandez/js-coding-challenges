describe("Convert num to time:", function () {
  let timeConvert = require("../../challenges/timeConvert.js")
  
  it("Return the number in hours and minutes, separated by a colon",
    function () {
      expect(timeConvert(63)).toEqual("1:3")
    })
    
  it("Return the number in hours and minutes, separated by a colon",
    function () {
      expect(timeConvert(150)).toEqual("2:30")
    })
})

/*
Create a function that takes 3 numbers as parameters and returns a distinct
number. 2 of the 3 parameters will always be the same.
*/


let distNum = function (num1, num2, num3) {
  if (num1 != num2 && num1 != num3) {
    return num1
  } else if (num2 != num1 && num2 != num3) {
    return num2
  } else if (num3 != num1 && num3 != num2) {
    return num3
  }
}

module.exports = distNum

/*
A Narcissistic Number is a number which is the sum of its own digits, each
raised to the power of the number of digits.

Have the function narcNumber take in a number as a parameter and determine if it
is a Narcissistic Number. Your code must return true or false depending upon
whether the given number is a Narcissistic number.

Examples:
153:  1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153 ... True
1634: 1^4 + 6^4 + 3^4 + 4^4 = 1 + 1296 + 81 + 256 = 1634 ... True
*/


let narcNumber = (value) => {
  let arr = value.toString().split('')
  let len = arr.length
  let sum = 0
  
  arr.forEach((n) => {
    let num = parseInt(n)
    sum += Math.pow(num, len)
  })
  if (sum == value) {
    return true
  } else {
    return false
  }
}

module.exports = narcNumber

/*
A digital root is the recursive sum of all the digits in a number.

Have the function digitalRoot take a number as an argument and return the sum.
If that value has two digits, continue reducing in this way until a single-digit
number is produced. This is only applicable to the natural numbers.

Examples:
16 =
1 + 6
7

942 =
= 9 + 4 + 2
= 15 ...
= 1 + 5
6
*/


let digitalRoot = (n) => {
  let num = n.toString().split('')
  let sum = 0
  
  for (let i = 0; i < num.length; i++) {
    sum += parseInt(num[i])
  }
  
  if (sum.toString().split('').length >= 2) {
   return digitalRoot(sum)
  }
  return sum
}

module.exports = digitalRoot

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
  // Answer here
  let number = 0;
  for (let int of String(n)) {
    number += Number(int);
  }
  if (String(number).length !== 1) {
    return digitalRoot(number);
  }
  return number;
};

console.log(digitalRoot(942));

module.exports = digitalRoot;

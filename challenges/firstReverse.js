/*
Have the function firstReverse take the str parameter being passed and return
the string in reversed order. For example: if the input string is
"Hello World and Coders" then your program should return the string
"sredoC dna dlroW olleH".
*/

let firstReverse = function (str) {

  let splitty = str.split('')
  let reverseArr = splitty.reverse()
  return reverseArr.join('')
         
}

module.exports = firstReverse

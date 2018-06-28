/*
Have the function alphabetSoup take the str string parameter being passed
and return the string with the letters in alphabetical order
(ie. hello becomes ehllo). Assume numbers and punctuation symbols will not be
included in the string.
*/

let alphabetSoup = function (str) {
  
  let arr = str.split('')
  let sortArr = arr.sort()
  let abc = sortArr.join('')
  
  return abc
}

module.exports = alphabetSoup

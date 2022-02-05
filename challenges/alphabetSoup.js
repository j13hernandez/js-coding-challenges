/*
Have the function alphabetSoup take the str string parameter being passed
and return the string with the letters in alphabetical order
(ie. hello becomes ehllo). Assume numbers and punctuation symbols will not be
included in the string.
*/

const alphabetSoup = (str) => str.split('').sort().join('');

module.exports = alphabetSoup;

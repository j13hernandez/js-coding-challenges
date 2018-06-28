/*
Have the function letterCapitalize take the str parameter being passed and
capitalize the first letter of each word. Words will be separated by only one
space.
*/

let letterCapitalize = function (str) {
  return str.replace(/\b[a-z]/gi, function (char) {
    return char.toUpperCase()
  })
}

module.exports = letterCapitalize

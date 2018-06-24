# Coding Challenges
A repo to store daily coding challenges.

### Testing Instructions
1. Fork and clone this repository
2. Change into new directory
3. Install dependencies with `npm install`
3. Run `npm test spec/challenges/<specFile>` to test desired solution or `npm test` to test every solution

Testing done with [Jasmine](https://jasmine.github.io/).

### Challenges
- Capitalize Letter ([solution](challenges/letterCapitalize.js))
  - Have the function letterCapitalize(str) take the str parameter being passed and capitalize the first letter of each word. Words will be separated by only one space.
- Distinct Numbers ([solution](challenges/distinctNumbers.js))
  - Create a function that takes 3 numbers as parameters and returns a distinct number. 2 of the 3 parameters will always be the same.
- First Factorial ([solution](challenges/firstFactorial.js))
  - Have the function FirstFactorial(num) take the num parameter being passed and return the factorial of it (e.g. if num = 4, return (4 * 3 * 2 * 1)). For the test cases, the range will be between 1 and 18 and the input will always be an integer.
- First Reverse ([solution](challenges/firstReverse.js))
  - Have the function FirstReverse(str) take the str parameter being passed and return the string in reversed order. For example: if the input string is "Hello World and Coders" then your program should return the string "sredoC dna dlroW olleH".
- Letter Changes ([solution](challenges/letterChanges.js))
  - Have the function LetterChanges(str) take the str parameter being passed and modify it using the following algorithm. Replace every letter in the string with the letter following it in the alphabet (ie. c becomes d, z becomes a). Then capitalize every vowel in this new string (a, e, i, o, u) and finally return this modified string.
- Longest Word ([solution](challenges/longestWord.js))
  - Have the function LongestWord(sen) take the sen parameter being passed and return the largest word in the string. If there are two or more words that are the same length, return the first word from the string with that length. Ignore punctuation and assume sen will not be empty.
- Number Check ([solution](challenges/checkNums.js))
  - Have the function checkNums(num1,num2) take both parameters being passed and return the string true if num2 is greater than num1, otherwise return the string false. If the parameter values are equal to each other then return the string -1.
- Simple Adding ([solution](challenges/simpleAdding.js))
  - Have the function SimpleAdding(num) add up all the numbers from 1 to num. For example: if the input is 4 then your program should return 10 because 1 + 2 + 3 + 4 = 10. For the test cases, the parameter num will be any number from 1 to 1000.
- Simple Symbols ([solution](challenges/simpleSymbols.js))
  - Have the function SimpleSymbols(str) take the str parameter being passed and determine if it is an acceptable sequence by either returning the string true or false. The str parameter will be composed of + and = symbols with several letters between them (ie. ++d+===+c++==a) and for the string to be true each letter must be surrounded by a + symbol. So the string to the left would be false. The string will not be empty and will have at least one letter.
- Time Convert ([solution](challenges/timeConvert.js))
  - Have the function TimeConvert(num) take the num parameter being passed and return the number of hours and minutes the parameter converts to (ie. if num = 63 then the output should be 1:3). Separate the number of hours and minutes with a colon.

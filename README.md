# Coding Challenges
A repo to store daily coding challenges.

### Instructions
1. Fork and clone this repository.
2. Change into new directory.
3. Install dependencies with `npm install`.
4. Create and checkout a new branch to work on.

#### Testing
- To test solution on a specific file:
  - Run `npm test spec/challenges/<nameOfFile>Spec.js`
- To test every file:
  - Run `npm test`

*Testing done with [Jasmine](https://jasmine.github.io/).*

### Challenges
- [Alphabet Soup](challenges/alphabetSoup.js)
  - Have the function alphabetSoup take the str string parameter being passed and return the string with the letters in alphabetical order (ie. hello becomes ehllo). Assume numbers and punctuation symbols will not be included in the string.
- [Capitalize First Letters](challenges/letterCapitalize.js)
  - Have the function letterCapitalize take the str parameter being passed and capitalize the first letter of each word. Words will be separated by only one space.
- [Distinct Number](challenges/distinctNumbers.js)
  - Have the function distNum take 3 numbers as parameters and return the distinct number. 2 of the 3 parameters will always be the same.
- [First Factorial](challenges/firstFactorial.js)
  - Have the function firstFactorial take the num parameter being passed and return the factorial of it (e.g. if num = 4, return (4 * 3 * 2 * 1)). For the test cases, the range will be between 1 and 18 and the input will always be an integer.
- [First Reverse](challenges/firstReverse.js)
  - Have the function firstReverse take the str parameter being passed and return the string in reversed order. For example: if the input string is "Hello World and Coders" then your program should return the string "sredoC dna dlroW olleH".
- [Letter Changes](challenges/letterChanges.js)
  - Have the function letterChanges take the str parameter being passed and modify it using the following algorithm. Replace every letter in the string with the letter following it in the alphabet (ie. c becomes d, z becomes a). Then capitalize every vowel in this new string (a, e, i, o, u) and finally return this modified string.
- [Longest Word](challenges/longestWord.js)
  - Have the function longestWord take the sen parameter being passed and return the largest word in the string. If there are two or more words that are the same length, return the first word from the string with that length. Ignore punctuation and assume sen will not be empty.
-  [Parity Outlier](challenges/parityOutlier.js)
  - You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Have the function parityOutlier take the array as an argument and return this "outlier" N.
- [Number Check](challenges/checkNums.js)
  - Have the function checkNums take two parameters being passed and return the string true if num2 is greater than num1, otherwise return the string false. If the parameter values are equal to each other then return the string -1.
- [Simple Adding](challenges/simpleAdding.js)
  - Have the function simpleAdding add up all the numbers from 1 to num. For example: if the input is 4 then your program should return 10 because 1 + 2 + 3 + 4 = 10. For the test cases, the parameter num will be any number from 1 to 1000.
- [Simple Symbols](challenges/simpleSymbols.js)
  - Have the function simpleSymbols take the str parameter being passed and determine if it is an acceptable sequence by either returning the string true or false. The str parameter will be composed of + and = symbols with several letters between them (ie. ++d+===+c++==a) and for the string to be true each letter must be surrounded by a + symbol. So the string to the left would be false. The string will not be empty and will have at least one letter.
- [Time Convert](challenges/timeConvert.js)
  - Have the function timeConvert take the num parameter being passed and return the number of hours and minutes the parameter converts to (ie. if num = 63 then the output should be 1:3). Separate the number of hours and minutes with a colon.

**The original version for some these challenges can be found on [CoderByte](https://coderbyte.com/)**.

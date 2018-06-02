Have the function LetterChanges(str) take the str parameter being passed and
modify it using the following algorithm. Replace every letter in the string
with the letter following it in the alphabet (ie. c becomes d, z becomes a).
Then capitalize every vowel in this new string (a, e, i, o, u) and finally
return this modified string. 

```javascript
function LetterChanges(str) {

  let upAndUp = str.replace(/[a-z]/gi, function (i) {
      switch(i) {
          case 'z': return 'a'
          case 'Z': return 'A'
          default: return String.fromCharCode(1 + i.charCodeAt(0))
      }
  })
  return upAndUp.replace(/[aeiou]/g, function(v) {
      return v.toUpperCase()
  });
         
}
```

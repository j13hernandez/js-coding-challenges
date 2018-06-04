Have the function letterCapitalize(str) take the str parameter being passed and
capitalize the first letter of each word. Words will be separated by only one
space.

```javascript
function letterCapitalize (str) {
  return str.replace(/\b[a-z]/gi, function (char) {
    return char.toUpperCase()
  })
}
```

/*
Have the function towerBuilder take n number of floors and return n number of
of tower blocks. The argument will always be an integer greater than zero.

For example, a tower of 3 floors looks like below:
*/
[
  '  *  ',
  ' *** ',
  '*****'
]
// and a tower of 6 floors looks like below:
[
  '     *     ',
  '    ***    ',
  '   *****   ',
  '  *******  ',
  ' ********* ',
  '***********'
]
// _____________________________________________________________________________

let towerBuilder = (nFloors) => {
  let space = ""
  let star = ""
  let tower = []
  
  for (let i = 1; i <= nFloors; i++) {
    space = (" ").repeat(nFloors - i)
    star = ("*").repeat((2 * i) - 1)
    tower.push(space + star + space)
  }
  
  return tower
}

module.exports = towerBuilder

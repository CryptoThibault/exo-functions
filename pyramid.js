function pyramid(x, y, z) {
  let pyr = []
  let nbs = ''
  for (i = 0; i < x; i++) {
    nbs += z
    pyr.push(nbs)
  }
  if (y === true) {
    pyr = pyr.sort((a, b) => b.length - a.length)
  }
  return pyr.join('\n')
}

let base = 10
let reverse = true
let symbol = '%'
console.log(pyramid(base, reverse, symbol))
function pyramid(x, y, z) {
  let pyr = []
  for (i = 0; i < x; i++) {
    pyr += z
    z += z
  }
  if (y === true) {
    pyr = pyr.sort()
  }
  pyr = pyr.join('\n')
  return pyr
}

let base = 10
let reverse = false
let symbol = '0'
console.log(pyramid(base, reverse, symbol))
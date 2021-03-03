function count(x, y, z) {
  return x + y * z
}

let min = 20
let max = 140
let step = 4
for (i = 0; i < (max + 1 - min) / step; i++) {
  console.log(count(min, i, step))
}
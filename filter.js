function isOdd(x) {
  return x % 2 !== 0 ? true : false
}

function filter(t) {
  let table = []
  for (i = 0; i < t.length; i++) {
    if (filtertype(t[i]) === true) {
      table.push(t[i])
    }
  }
  return table
}

let tab = [25, 32, 40, 21, 28, 33, 35]
let filtertype = isOdd
console.log(filter(tab))
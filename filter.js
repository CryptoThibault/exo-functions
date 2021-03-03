function forEach(t) {
  let table = []
  for (i = 0; i < t.length; i++) {
    table.push(t[i])
  }
  return table
}

function filter(t) {
  return forEach(t)
}

tab = [25, 21, 40, 36, 28, 39, 35]
console.log(filter(tab))
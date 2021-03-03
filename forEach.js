function convertMiToKm(x) {
  return x * 1.60934
}

function forEach(t) {
  let table = []
  for (i = 0; i < t.length; i++) {
    table.push(converter(t[i]))
  }
  return table
}

let tab = [25, 21, 40, 36, 28, 39, 35]
let converter = convertMiToKm
console.log(forEach(tab))
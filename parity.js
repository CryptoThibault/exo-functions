function isOdd(x) {
  return x % 2 !== 0 ? true : false
}

function isEven(x) {
  return isOdd(x) === false ? true : false
}

let nb = 7
console.log(`Odd: ${isOdd(nb)}`)
console.log(`Even: ${isEven(nb)}`)
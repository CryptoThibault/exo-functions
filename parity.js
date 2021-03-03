function isOdd(x) {
  if (x % 2 !== 0) {
    return true
  } else {
    return false
  }
}

function isEven(x) {
  if (isOdd(x) === false) {
    return true
  } else {
    return false
  }
}

let nb = 7
console.log(`Odd: ${isOdd(nb)}`)
console.log(`Even: ${isEven(nb)}`)
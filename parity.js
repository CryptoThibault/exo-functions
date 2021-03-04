function isOdd(x) {
  return x % 2 !== 0
}

function isEven(x) {
  return !isOdd(x)
}

let nb = 7
console.log(`The number ${nb} is ${isEven(nb) === true ? 'even' : 'odd'}.`)
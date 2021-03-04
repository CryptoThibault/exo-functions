function isOdd(x) {
  return x % 2 !== 0 ? true : false
}

function isEven(x) {
  return isOdd(x) === false ? true : false
}

let nb = 8
console.log(`The number ${nb} is ${isEven(nb) === true ? 'even' : 'odd'}.`)
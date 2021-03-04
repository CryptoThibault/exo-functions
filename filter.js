function isOdd(x) {
  return x % 2 !== 0 ? true : false
}
function isEven(x) {
  return isOdd(x) === false ? true : false
}

function filter(tab, func) {
  let newtab = []
  tab.forEach(elem => {
    if (func(elem) === true) { newtab.push(elem) }
  })
  return newtab
}

console.log(filter([25, 32, 40, 21, 28, 33, 35], isEven))
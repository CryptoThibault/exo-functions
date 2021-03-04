function isOdd(x) {
  return x % 2 !== 0
}
function isEven(x) {
  return !isOdd(x)
}

function filter(tab, func) {
  let newtab = []
  tab.forEach(elem => {
    if (func(elem)) { newtab.push(elem) }
  })
  return newtab
}

console.log(filter([25, 32, 40, 21, 28, 33, 35], isEven))
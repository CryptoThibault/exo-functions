function convertMiToKm(x) {
  return x * 1.60934
}
function reverseStr(str) {
  return str.split('').reverse().join('')
}

function forEach(tab, func) {
  let newtab = []
  tab.forEach(elem => {
    newtab.push(func(elem))
  })
  return newtab
}

console.log(`${forEach([25, 21, 40, 36, 28, 39, 35], convertMiToKm).join('Km ')}Km`)

console.log(forEach(['lucas', 'anna', 'bob', 'lisa', 'emma'], reverseStr).join(' '))
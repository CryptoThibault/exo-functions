function convertMiToKm(x) {
  return x * 1.60934
}
function reverseStr(str) {
  return str.split('').reverse().join('')
}
function isPalindrome(str) {
  return str === reverseStr(str) ? 'yes' : 'no'
}

function forEach(tab, func) {
  let newtab = []
  tab.forEach(elem => {
    newtab.push(func(elem))
  })
  return newtab
}

console.log(forEach([25, 21, 40, 36, 28, 39, 35], convertMiToKm).join(' '))
console.log(forEach(['lucas', 'anna', 'bob', 'lisa', 'emma'], reverseStr).join(' '))
console.log(forEach(['lucas', 'anna', 'bob', 'lisa', 'emma'], isPalindrome).join(' '))
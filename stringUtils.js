function reverseStr(str) {
  return str.split('').reverse().join('')
}
function isPalindrome(str) {
  return str === reverseStr(str) ? true : false
}
let string = 'hahah'
console.log(reverseStr(string))
console.log(isPalindrome(string))
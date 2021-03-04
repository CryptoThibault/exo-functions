function reverseStr(str) {
  return str.split('').reverse().join('')
}
function isPalindrome(str) {
  return str === reverseStr(str) ? true : false
}

let string = 'kayak'
console.log(`${reverseStr(string)} is ${isPalindrome(string) === true ? '' : 'not'} a palindrome.`)
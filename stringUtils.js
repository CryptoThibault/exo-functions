function reverseStr(str) {
  let rev = str.split('').reverse().join('')
  return rev
}
function isPalindrome(str) {
  if (str === reverseStr(str)) {
    return true
  } else {
    return false
  }
}
let string = 'hahahah'
console.log(reverseStr(string))
console.log(isPalindrome(string))
function add(x, y) {
  return x + y
}
function sub(x, y) {
  return x - y
}
function mul(x, y) {
  return x * y
}
function div(x, y) {
  return x / y
}
function calc(x, y, z) {
  switch (y) {
    case '+':
      return add(x, z)
      break
    case '-':
      return sub(x, z)
      break
    case '*':
      return mul(x, z)
      break
    case '/':
      return div(x, z)
      break
  }
}

console.log(calc(5, '+', 6))
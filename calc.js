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

op = '5*7'
op = op.split('')
console.log(calc(op[0], op[1], op[2]))
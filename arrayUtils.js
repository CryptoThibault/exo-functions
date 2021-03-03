function biggest(nbl) {
  for (i = 0; i < nbl.length; i++) {
    if (nbl[i] > nbl[i - 1]) {
      big = nbl[i]
    }
  }
  return big
}

function sortAscend(nbl) {
  sortnbl = nbl.sort((a, b) => a - b)
  return sortnbl
}

let nblist = [99, 100, 101, 1, 2]
console.log(biggest(nblist))
console.log(sortAscend(nblist))
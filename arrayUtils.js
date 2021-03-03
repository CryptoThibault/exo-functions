function biggest(nbl) {
  let big = nbl[0]
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

function makeUnique(nbl) {
  return sortAscend(nbl).filter((item, index) => sortAscend(nbl).indexOf(item) === index)
}

let nblist = [1, 2, 1, 3, 2, 4, 5, 7, 5, 2]
console.log(biggest(nblist))
console.log(sortAscend(nblist))
console.log(makeUnique(nblist))
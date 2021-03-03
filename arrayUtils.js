function biggest(nbl) {
  let big = Math.max(...nbl)
  return big
}

function sortAscend(nbl) {
  sortnbl = nbl.sort((a, b) => a - b)
  return sortnbl
}

function makeUnique(nbl) {
  return sortAscend(nbl).filter((item, index) => sortAscend(nbl).indexOf(item) === index)
}

let nblist = [10, 2, 1, 3, 20, 4, 5, 7, 5, 2]
console.log(biggest(nblist))
console.log(sortAscend(nblist))
console.log(makeUnique(nblist))
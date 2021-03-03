function biggest(nbl) {
  return Math.max(...nbl)

}

function sortAscend(nbl) {
  return nbl.sort((a, b) => a - b)

}

function makeUnique(nbl) {
  return sortAscend(nbl).filter((item, index) => sortAscend(nbl).indexOf(item) === index)
}

let nblist = [10, 2, 1, 3, 2, 4, 5, 7, 5, 2]
console.log(biggest(nblist))
console.log(sortAscend(nblist))
console.log(makeUnique(nblist))
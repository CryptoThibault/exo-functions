function biggest(nbl) {
  return Math.max(...nbl)
}

function sortAscend(nbl) {
  return nbl.sort((a, b) => a - b)
}

function makeUnique(nbl) {
  return nbl.filter((item, index) => nbl.indexOf(item) === index)
}

let nblist = [10, 2, 1, 3, 2, 4, 5, 7, 5, 2]
console.log(`The biggest number is ${biggest(nblist)}, the sorted list is ${sortAscend(nblist)} and the unique list is ${makeUnique(nblist)}`)
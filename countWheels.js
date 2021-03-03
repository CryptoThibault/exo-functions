function countWheels(a, b, c, d) {
  return a + b * 2 + c * 4 + d * 6
}

let nb_monocycle = 3
let nb_moto = 5
let nb_voiture = 6
let nb_limousine = 1
console.log(countWheels(nb_monocycle, nb_moto, nb_voiture, nb_limousine))
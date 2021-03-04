function countWheels(nb_monocycle, nb_moto, nb_voiture, nb_limousine) {
  return nb_monocycle + nb_moto * 2 + nb_voiture * 4 + nb_limousine * 6
}

console.log(`Le total de roues est ${countWheels(3, 6, 4, 2)}`)
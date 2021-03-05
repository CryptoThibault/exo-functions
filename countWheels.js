const NB_WHEELS_MONOCYCLE = 1
const NB_WHEELS_MOTO = 2
const NB_WHEELS_CAR = 4
const NB_WHEELS_LIMO = 6
function countWheels(nb_monocycle, nb_moto, nb_voiture, nb_limousine) {
  return nb_monocycle * NB_WHEELS_MONOCYCLE + nb_moto * NB_WHEELS_MOTO + nb_voiture * NB_WHEELS_CAR + nb_limousine * NB_WHEELS_LIMO
}

console.log(`Le total de roues est ${countWheels(3, 6, 4, 2)}`)
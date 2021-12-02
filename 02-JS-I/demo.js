function puedeManejar(edad) {
  if (edad > 18) {
    console.log('ah sos mayor de 18 qué bueno :)')
    return true
  }

  console.log('sos menor de 18, no podes manejar :(')
  return false
}

// console.log('Llamo a la funcion con edad = 25: ')
// puedeManejar(25)
// console.log('----------------------')
// console.log('Llamo a la funcion con edad = 12: ')
// puedeManejar(12)

function tengoHambre(respuesta) {
  if (respuesta === 'si') {
    return 'Uh, bueno.. ya casi terminamos. Aguanten'
  } else if (respuesta === 'no') {
    return 'Buenisimo, sigamos un rato más entonces!'
  } else if (respuesta === 'mmm maso') {
    return 'Ah, bueno,estamos igual'
  }
}

console.log(tengoHambre('asdfsd'))
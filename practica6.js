const hora = parseInt(prompt("Ingresa la hora: "))
const minutos = parseInt(prompt("Ingresa los minutos: "))

const res = (hora * 60 * 60) + (minutos * 60)

alert("En total son: " + res + " segundos")
// Boolean

// const descuento = true

// console.log(descuento)
// console.log(typeof descuento)

//number

// const numero1 = 20.20
// const numero2 = 30
// const numero3 = -100

// console.log(typeof numero1)
// console.log(typeof numero2)
// console.log(typeof numero3)

//string o cadenas de texto
// const alumno = "Juan"
// let producto = "Monitor 20 pulgadas"

// const numero = "30"
// const numero2 = 30

// console.log(typeof numero)
// console.log(typeof numero2)
// console.log(alumno + producto)

//BigInt
// const numeroGrande = BigInt(654654654564654654)
// console.log(typeof numeroGrande)
// const numero = 10
// const numero2 = 20
// console.log(numero + Number(numeroGrande))

//coercion - conversion
// const numero = "30"
// const numero2 = 30
// console.log(typeof String(numero2))
// console.log(typeof Number(numero))

// Symbol
const primerSymbol = Symbol(30)
const segundoSymbol = Symbol(30)
console.log(primerSymbol === segundoSymbol)
console.log(primerSymbol.valueOf())
console.log(segundoSymbol.valueOf())
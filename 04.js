// Objetos

const producto = {
    nombre: "tablet",
    precio: "300",
    disponible: true
}

//opcion 1
// console.log(producto)
// console.table(producto)

// console.log(producto.nombre)
// console.log(producto.precio)
// console.log(producto.disponible)



// Destructuring
//opcion 2
// const {nombre, precio, disponible} = producto
// console.log(nombre)
// console.log(precio)
// console.log(disponible)

//Object literal Enhacement
const autenticado = true
const usuario = "Aleps"

const nuevoObjeto = {
    autenticado,
    usuario
}

console.table(nuevoObjeto)
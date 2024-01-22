// Unir 2 objetos

const producto = {
    nombre: "tablet",
    precio: "300",
    disponible: true
}

const cliente = {
    nombre: "Aleps",
    premium: true
}

// Los 3 puntos son para clonar el objeto, ... + Objeto
const nuevoObject2 = {
    producto: {...producto},
    cliente: {...cliente}
}

const nuevoObject = Object.assign(producto, cliente)

console.log(nuevoObject)
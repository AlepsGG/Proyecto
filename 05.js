// Objetos - Manipulacion

const producto = {
    nombre: "tablet",
    precio: "300",
    disponible: true
}

//Freeze - No te deja modificarlos, no permite añadir ni eliminar
// Object.freeze(producto)
// Seal - Modificar propiedades existentes, no permite añadir ni eliminar
Object.seal(producto)

producto.nombre = "Algo"

// Si no existe, la va añadir
producto.imagen = "Imagen.jpg"

// Eliminar valores
delete producto.disponible

console.log(producto.nombre)
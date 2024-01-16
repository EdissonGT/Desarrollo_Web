// Objetos
const producto = {
    // Propiedad o llave del objeto, si cambia el signo de = por :
    nombreProducto : "Monitor 20 Pulgadas",
    precio : 300,
    disponible : true
}

// Forma anterior
// const precioProducto = producto.precio;
// const nombreProducto = producto.nombreProducto;

// console.log(precioProducto)
// console.log(nombreProducto)

// Destructuring "Forma corta"
const {precio, nombreProducto} = producto; // Tiene que tener el mismo nombre de la variable

console.log(precio);
console.log(nombreProducto);
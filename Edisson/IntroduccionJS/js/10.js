// Objetos

// Es lo mismo de abajo, solo que abajo es una variable objeto
// const nombreProducto = "Monitor 20 Pulgadas"
// const precio = 300;
// const disponible = true;


// Creando un objeto, que al final es una variable
const producto = {
    // Propiedad o llave del objeto, si cambia el signo de = por :
    nombreProducto : "Monitor 20 Pulgadas",
    precio : 300,
    disponible : true
}

console.log(producto);

console.log(producto.precio);
console.log(producto.nombreProducto);
console.log(producto.disponible);

// Otra sintaxis para mostrar una propiedad especifica de la variable objeto
console.log(producto['precio'])
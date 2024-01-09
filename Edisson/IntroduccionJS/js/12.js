// "use strict"; // Ejecuta el codigo JS de forma estricta

// Objetos
const producto = {
    // Propiedad o llave del objeto, si cambia el signo de = por :
    nombreProducto : "Monitor 20 Pulgadas",
    precio : 300,
    disponible : true
}

// Codigo para congelar objetos
// Con Freeze no permite agregar, eliminar, o modificar
// Con Seel no permite agregar o eliminar, pero si modificar las propiedades existentes

Object.seal(producto);

producto.precio = 'Nuevo Precio';


console.log(producto);
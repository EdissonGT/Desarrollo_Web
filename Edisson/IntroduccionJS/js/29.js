// PROGRAMACION ORIENTADA OBJETOS

// Objet Literal

// Se creo un objeto en JS, un Objeto tiene diferentes variables en una sola.
const producto = {
    nombre: 'tablet',
    precio: 600
}

// Objet Constructor
            // En este parentesis de agrega los PARAMETROS
function Producto(nombre, precio, disponible) {
    // Se asigna el valor utilizando this
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = disponible;
}

// Se va a crear una instancia para la clase de arriba
                            // En estos parantesis de agregan los ARGUMENTOS
const producto2 = new Producto('Monitor', 700, true);
const producto3 = new Producto('Teclado', 100, false);
const producto4 = new Producto('Mouse', 300, true);
const producto5 = new Producto('Laptop', 400, true);

// Para mostrarlo en consola 
console.log(producto2);
console.log(producto3);
console.log(producto4);
console.log(producto5);
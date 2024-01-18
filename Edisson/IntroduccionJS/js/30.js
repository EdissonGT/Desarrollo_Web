// PROGRAMACION ORIENTADA OBJETOS

// Objet Literal

// Se creo un objeto en JS, un Objeto tiene diferentes variables en una sola.
// const producto = {
//     nombre: 'tablet',
//     precio: 600
// }

// Objet Constructor

function Cliente(nombre, apellido) {
    // Se asigna el valor utilizando this
    this.nombre = nombre;
    this.apellido = apellido;
}

// Crear funciones que solo se utilizan en un objeto en especifico
Cliente.prototype.formatearCliente = function () {
    return `El Cliente su nombre: ${this.nombre} su apellido: ${this.apellido}`;
}

// Estamos instanciando Cliente
const cliente = new Cliente('Juan', 'Payes');

            // En este parentesis de agrega los PARAMETROS
function Producto(nombre, precio, disponible) {
    // Se asigna el valor utilizando this
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = disponible;
}

// Crear funciones que solo se utilizan en un objeto en especifico
Producto.prototype.formatearProducto = function () {
    return `El Producto ${this.nombre} tiene un precio de: $ ${this.precio} y su disponibilidad es de ${this.disponible}`;
}

// Se va a crear una instancia para la clase de arriba
                            // En estos parantesis de agregan los ARGUMENTOS
const producto2 = new Producto('Monitor', 700, true);
const producto3 = new Producto('Teclado', 100, false);
const producto4 = new Producto('Mouse', 300, true);
const producto5 = new Producto('Laptop', 400, true);

function formatearProducto (producto) {
    return `El Producto ${producto.nombre} tiene un precio de: $ ${producto.precio} y su disponibilidad es de ${producto.disponible}`;
}

// Para mostrarlo en consola 
// console.log(producto2);
// console.log(producto3);
// console.log(producto4);
// console.log(producto5);

// Se muestra en la consola la funsion formatearProducto que se le esta pasando la instancia "producto2"
console.log(producto2.formatearProducto());
console.log(producto3.formatearProducto());

console.log(cliente.formatearCliente());

// Ejemplo Personal

// Se crea un OBJETO CONSTRUCTOR
function Carro(marca, asientos) {
    this.marca = marca;
    this.asientos = asientos
}

// Se crea un METODO ESPECIFICO SOLO PARA EL OBJETO CONSTRUCTOR
Carro.prototype.formatearCarro = function () {
    return `La marca del carro es: ${this.marca} con los asientos ${this.asientos}`
}

// Se crea una Instancia para el objeto Carro
const carro1 = new Carro('Honda', 4)

// Se manda a llamar al metodo y la salida en consola
console.log(carro1.formatearCarro() );
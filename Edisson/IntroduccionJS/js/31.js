// Classes en JavaScript

// Las clases siempre empiezan en Mayuscula
// Se CREA UNA CLASE
class Producto {
    // Constructor es una funsion reservada
    constructor(nombre, precio, disponibilidad) {
        this.nombre = nombre;
        this.precio = precio;
        this.disponibilidad = disponibilidad
    }

    // Se agrega un METODO a la CLASE Producto
    formatearProducto() {
        return `El Producto ${this.nombre} con el precio ${this.precio}, su disponibilidad es de ${this.disponibilidad}`
    }

    formatearPrecio() {
        return `Este precio $ ${this.precio}, pertenece a este producto ${this.nombre}`
    }
}

// Se Instancia una variable para la clase
const producto2 = new Producto('Monitor', 700, true);
const producto3 = new Producto('Teclado', 100, false);
const producto4 = new Producto('Mouse', 800, false);


console.log(producto2.formatearProducto());
console.log(producto3.formatearProducto());
console.log(producto4.formatearPrecio());
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

    obtenerPrecio() {
        console.log(this.precio);
    }
}

// Se Instancia una variable para la clase
const producto2 = new Producto('Monitor', 700, true);
const producto3 = new Producto('Teclado', 100, false);
const producto4 = new Producto('Mouse', 800, false);

// Herencia

// Usandao 'extends' vamos a heredar el constructor de Producto y su metodo, hacia los objetos de la clase LIBRO
class Libro extends Producto {
    constructor(nombre, precio, isbn){
        // super nos trae el contructor que tenemos arriba
        super(nombre, precio);
        this.isbn = isbn;
    }

    formatearProducto() {
        // Para heredar lo que se escribio en el metodo de arriba igual se usa "super.formatearProducto()" en Templae
        return `${super.formatearProducto()} y su ISBN es ${this.isbn}`
    }

    obtenerPrecio() {
        super.obtenerPrecio();
        console.log('Y si hay en existencia');
    }
}

const libro = new Libro('JavaScript', 802, '1234562456');

console.log(libro.formatearProducto() );
console.log(libro.obtenerPrecio());
console.log(producto2.formatearProducto());
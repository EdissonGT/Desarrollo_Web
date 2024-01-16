// Arrays con Objetos
const carrito = [
    { nombre: 'Celular', precio: 500},
    { nombre: 'Tablet 20" pulgadas', precio: 200},
    { nombre: 'Telefono 6.1" pulgadas', precio: 100},
    { nombre: 'Bocinas', precio: 600},
    { nombre: 'Mouse" pulgadas', precio: 800},
    { nombre: 'Ventilador" pulgadas', precio: 900},
    { nombre: 'Monitor 10" pulgadas', precio: 100},
    { nombre: 'Audifonos" pulgadas', precio: 600}
];

// ForEach
// Fue creado para iterar y mostrar los resultados

carrito.forEach(function(producto) { // El forEach pasa por cada elemento del Array, le pasamos un parametro
    console.log(producto.nombre); // Mostramos el parametro por el cual pasamos.
    // Para acceder a la propiedad del objeto, utilizamos el "." y nombre o precio.
});

// Estamos utilizando un Arrow Funtions
carrito.forEach(valor => console.log(valor.precio));

const arreglo1 = carrito.forEach(valor => valor.precio);

// map
// Para crear un nuevo arreglo
carrito.map(produc => console.log(produc.nombre));

const arreglo2 = carrito.map(produc => produc.nombre);

const arreglo3 = carrito.map(produc1 => `${produc1.precio} cuesta el ${produc1.nombre}`);


console.log(arreglo1);
console.log(arreglo2);
console.log(arreglo3);
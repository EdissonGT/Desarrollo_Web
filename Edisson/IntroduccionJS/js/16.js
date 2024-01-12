// Arreglo Methds

// Arrays plano
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];

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

// forEach
// Este codigo esta usando como un for, recorre el Array, luego almacena la informacion en una variable
// luego se crea una conficion con IF si es igual mes a Marzo, que muestre el mensaje en console.
meses.forEach(function(mes) {
    if(mes == 'Marzo') {
        console.log('Marzo si existe');
    }
});

// Includes
// Crea una variable en donde si esta incluido el texto Marzo en el Array, da como resultado True
let resultado = meses.includes('Marzo'); // Se usa para Arrays planos, includes se usa para Arrays planos

// Some ideal para arreglo con objetos

resultado = carrito.some(function(producto){ // some se usa para Arrays de objetos
    return producto.nombre === 'Bocinas' // Se accede a cada propiedad para poder acceder bien 
});


// Funcion Reduce

resultado = carrito.reduce(function(total, producto){ //Los valores que se le esta pasando a la funcion
    return total + producto.precio //Los valores que se estan tomando del Array carrito
}, 0); // Para inicializar en 0

// Filter
resultado = carrito.filter(function(producto){
    return producto.precio > 400 // producto es el valor que va a devolver la function
});

resultado = carrito.filter(function(producto){
    return producto.nombre === 'Celular' //Para traer un producto igual a Celular
});

resultado = carrito.filter(function(producto){
    return producto.nombre !== 'Celular' //Para traer los que no son Celular, se niega
});

console.log(resultado);


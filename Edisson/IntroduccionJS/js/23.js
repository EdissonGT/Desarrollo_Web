

// Arrow Functions
const sumar2 = (n1, n2) => console.log(n1 + n2); // En el Arrow Funtions se elimina la palabra funtion, y se quita las llaves
//y luego de los parametros se coloca el "=>" para el console.log
sumar2(5, 10);

const aprendiendo = tecnologia => console.log(`Aprendiendo ${tecnologia}`);
// Cuando solo es un parametro se puede quitar los paranteris

aprendiendo('JavaScript');

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
// Ahora se usa el Arrow Function
meses.forEach(mes => {
    if(mes == 'Marzo') {
        console.log('Marzo si existe');
    }
});


// Some ideal para arreglo con objetos
// Se paso a Arrow Function
resultado = carrito.some(producto => producto.nombre === 'Bocinas' // Se accede a cada propiedad para poder acceder bien 
);

// Funcion Reduce
// Se paso a Arrow Fuction
resultado = carrito.reduce((total, producto) => total + producto.precio, 0);


// Filter
// Se paso a Arrow Functions
resultado = carrito.filter(producto => producto.precio > 400);

resultado = carrito.filter(producto => producto.nombre === 'Celular');

resultado = carrito.filter(producto => producto.nombre !== 'Celular');

console.log(resultado);
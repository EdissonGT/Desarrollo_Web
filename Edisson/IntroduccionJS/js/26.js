// For Lopp

// Primera parte en donde va a iniciar
// Segunda parte mientras el indice sea menor a 10
// Tercera parte, se incrementa de 1 en 1.

//EJEMPLO 1
 for ( let l = 0; l <= 10; l++){ 
      console.log(l);
  }

// EJEMPLO 2
 for ( let i = 1; i <= 100; i++){ // Es la condición
     if (i % 2 === 0 ) { // Se obtuvo el resultado del residuo, y se asegura que sea 0
         console.log(`El numero ${i} es par`);
     } else {
         console.log(`El numero ${i} es IMPAR`);
    }
 }

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

//EJEMPLO 3
for (let o = 0; o < carrito.length; o++) { // carrito.length para saber de cuanto es el arreglo de objetos en este caso es de 8
    console.log(carrito[o].nombre); // Con el punto se accese a la propiedad del objeto que esta dentro del arreglo.
};

// While Loop

// Do While Loop
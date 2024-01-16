// Arreglos o Arrays

// Los Arrays se crean con corchetes
// Los Arrays se pueden mostrar con log, o con table

const numeros = [10,20,30,40,50];


const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];


// Codigo para agregar un elmento a un arreglo, nombreAreglo-posición-valor
// numeros [5] = 60;


// numeros.push(60,70,80,90); // Agrega al final del Arreglo
// numeros.unshift(-10,-20,-30) // Agrega al principio del Arreglo

// // meses.pop(); // Elimina el ultimo dato del Arreglo
// meses.shift(); // Elimina el primer dato del Arreglo

// meses.splice(2, 1); // El primer valor toma la posicion, y el segundo cuantos valores

// console.table(meses);
// console.table(numeros);

const nuevoArreglo = [...meses, 'Junio']; // puedo pasar 'Junio' al principio para simular el principio o el final el metodo.
console.log(nuevoArreglo);
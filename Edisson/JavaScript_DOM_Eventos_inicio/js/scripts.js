// Todo los selectores empiezon con document.

// querySelector

const heading = document.querySelector('.header__texto h2'); //Retorna 0 o 1 Elementos

heading.textContent = 'Nuevo Heading'; // Nos permite cambiar el texto del contenido.
heading.classList.add('nueva__clase'); // Nos permite agregar una nueva clase a la etiqueta

console.log(heading);

// const enlace = document.querySelector('a');

// console.log(enlace);

// querySelectorAll

const enlaces = document.querySelectorAll('.navegacion a'); // Seleccionamos la clase padre y luego la etiqueta de enlace a
console.log(enlaces[0]);

enlaces[0].textContent = 'Nuevo Texto para Enlace'; // Cambiamos el texto del valor del enlace en la posicion 0 con el arreglo

enlaces[0].href = 'http://google.com'; // con la propiedad .href redireccionamos el nuevo enlace.

enlaces[0].classList.add('nueva__class'); // Con la propiedad classList.add agregamos nueva clase la etiqueta.

enlaces[0].classList.remove('navegacion__enlace'); // Con la propiedad classList.remove eliminamos una clase existente.

console.log(enlaces[0]);

// getElementById

const heading2 = document.getElementById('heading'); // Podemos seleccionar el codigo html con el ID de la etiqueta creada.

console.log(heading2);
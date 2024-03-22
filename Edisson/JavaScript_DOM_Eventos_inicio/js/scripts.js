// Todo los selectores empiezon con document.

// #1 querySelector

const heading = document.querySelector('.header__texto h2'); //Retorna 0 o 1 Elementos

heading.textContent = 'Nuevo Heading'; // Nos permite cambiar el texto del contenido.
heading.classList.add('nueva__clase'); // Nos permite agregar una nueva clase a la etiqueta

console.log(heading);

// const enlace = document.querySelector('a');

// console.log(enlace);

// #2 querySelectorAll

const enlaces = document.querySelectorAll('.navegacion a'); // Seleccionamos la clase padre y luego la etiqueta de enlace a
console.log(enlaces[0]);

enlaces[0].textContent = 'Nuevo Texto para Enlace'; // Cambiamos el texto del valor del enlace en la posicion 0 con el arreglo

enlaces[0].href = 'http://google.com'; // con la propiedad .href redireccionamos el nuevo enlace.

enlaces[0].classList.add('nueva__class'); // Con la propiedad classList.add agregamos nueva clase la etiqueta.

enlaces[0].classList.remove('navegacion__enlace'); // Con la propiedad classList.remove eliminamos una clase existente.

console.log(enlaces[0]);

// #3 getElementById

const heading2 = document.getElementById('heading'); // Podemos seleccionar el codigo html con el ID de la etiqueta creada.

console.log(heading2);


// GENERAR UN NUEVO ENLACE CON JS

// Siempre que vayamos a crear una etiqueta en JS, tiene que estar en mayuscula.

const nuevoEnlace = document.createElement('A') // con createElement vamos a crear codigo en JS para HTML

// Agregar el href

nuevoEnlace.href = 'nuevo-enlace.html';

// Agregar el texto

nuevoEnlace.textContent = 'Nuevo Enlace';

// Agregar la clase

nuevoEnlace.classList.add('class__nueva');

/* <a href="nosotros.html" class="nuevo-enlace">Nosotros</a> */


// Agregarlo al documento

const navegacion = document.querySelector('.navegacion');

// "appenChild" nos ayuda a insertar codigo HTML creando con JS.
navegacion.appendChild(nuevoEnlace);


console.log(nuevoEnlace);

// EVENTOS

console.log(1);

// EVENTOS QUE SE PUEDE EJECUTAR EN EL NAVEGADOR
// 'addEventListener' una vez que se ejecuto el codigo de esta linea se ejecuta el siguiente codigo.

window.addEventListener('load', function () { // load espera a que JS y los archivos que dependen del HMTL esten listos
    console.log(2);    // load espera a que se descague todo el HTML y las imagenes, CSS y JS
});

window.onload = function () {
    console.log(3)
};


document.addEventListener('DOMContentLoaded', function () { // Solo espera a que se descargue el HTML, pero no espera que se descargue CSS, JS o IMG.
    console.log(4)
});

window.addEventListener('load', imprimir);

console.log(5);

function imprimir() {
    console.log(12)
};

// window es selecionar mas que solo el HMTL, y accedemos a la propiedad de onscroll, para que cuando usemos el scroll mostremos en pantalla el mensaje
window.onscroll = function () {
    console.log('scrolling....')
};


// SELECCIONAR ELEMENTOS Y ASOCIALES UN EVENTO

// Con este codigo estamos seleccionando el boton de enviar, seleccionando la clase donde esta el boton y agregandole una variable.
const btnEnviar = document.querySelector('.boton--primario');

// Este codigo sirve para registrarle un evento al boton "Enviar"

// La funcion de evento se pasa en automatico al callback por el evento "click", cuando se utiliza el addEventListener
// btnEnviar.addEventListener('click', function(evento){
//     console.log(evento);

//     // Este codigo nos ayuda para Validar un Formulario
//     evento.preventDefault(); // Estamos previniendo la accion por defecto.
//     console.log('Enviando Formulario')
// });

// EL EVENTO DE SUBMIT


// EVENTOS DE LOS INPUTS Y TEXTAREA

const datos = {
    nombre: '',
    email: '',
    mensaje: ''
}

// se usa el # porque estamos selccionando el ID
const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');

// con change, nos permite registrar lo que esta escribiendo pero lo muestra hasta que nos salimos del textarea
// con "input", nos permite registrar si estamos escribiendo en tiempo real en el textarea
// con el "e", estamos mandando el evento a consola cada que escribimos una letra.

// nombre.addEventListener('input', function(e) {
//     // Estamos ingresando al evento del objeto, luego al target que es el ID, luego lo que se esta escribiendo con Value
//     console.log(e.target.value)
// });

nombre.addEventListener('input', leertexto);
email.addEventListener('input', leertexto);
mensaje.addEventListener('input', leertexto);

// Se tiene que usar la propiedad submit para poder enviar el FORMULARIO
formulario.addEventListener('submit', function (evento) {
    evento.preventDefault();

    // VALIDAR FORMULARIO
    // ESTAMOS EXTRAYENDO LAS VARIABLES GLOBALES CON DESTRUCCION
    const { nombre, email, mensaje } = datos;

    if (nombre === '' || email === '' || mensaje === '') {
        mostrarAlerta('Todos los campos son obligatorios', true);

        return; // RETURN CORTA LA EJECUCION DEL CODIGO, PORQUE SE ESTA CUMPLIENDO LA CODICION ASIGNADA
    }

    // CREA ALERTA DE ENVIAR CORRECTAMENTE
    mostrarAlerta('Se envio correctamente los datos'); // Se crea una nueva funcion porque el return del if anterior corta la ejecucion del codigo

    // Enviar el formualario
    // console.log('Enviando Formulario');
});

function leertexto(e) {
    // Estamos ingresando al evento del objeto, luego al target que es el ID, luego lo que se esta escribiendo con Value.
    // console.log(e.target.value);

    datos[e.target.id] = e.target.value;
    // e.target.id obtiene el identificador del campo de entrada que disparó el evento, y e.target.value obtiene el valor actual del campo de entrada.


    // console.log(datos);
};

function mostrarAlerta(mensaje, error = null) {
    const alerta = document.createElement('P');
    alerta.textContent = mensaje;

    if (error) {
        alerta.classList.add('error');
    } else {
        alerta.classList.add('correcto')
    }

    formulario.appendChild(alerta);

    // Desaparezca despues de 5 segundos

    setTimeout(() => {
        alerta.remove(); // Se agrega la clase remove() que nos ayuda a remover el codigo HTML creado.
    }, 5000); // el tiempo de 5 segundos
}

// Muestra un error en pantalla
// function mostrarError(mensaje) {
    // console.log(mensaje);

    // Estamos creando la etiqueta de PARRAFO
    // const error = document.createElement('P');
    // Estamos pasando el parametro de mensaje para mostrarlo
    // error.textContent = mensaje;
    // Estamos creando una clase llamda "error"
    // error.classList.add('error')

    // formulario.appendChild(error);


// };

// Mostrar en Pantalla que se mandaron los datos correctamente
// function mostrarCorrecto(mensaje) {
    // console.log(mensaje);

    // Estamos creando la etiqueta de PARRAFO
    // const correcto = document.createElement('P');
    // Estamos pasando el parametro de mensaje para mostrarlo
    // correcto.textContent = mensaje;
    // Estamos creando una clase llamda "error"
    // correcto.classList.add('correcto')

    // formulario.appendChild(correcto);

    // Desaparezca despues de 5 segundos

//     setTimeout(() => {
//         correcto.remove(); // Se agrega la clase remove() que nos ayuda a remover el codigo HTML creado.
//     }, 5000); // el tiempo de 5 segundos
// };
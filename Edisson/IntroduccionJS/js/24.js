// Estructuras de Control

const puntaje = 100; // Cuando solo se usa un signo de "=" es asignar el valor a una variable

if (puntaje !== 1000){ // Si se cumple la condición // Si se tiene dos "==" es comparación
    //Si se usa el triple "===" es mas estricto y mira si es string o int.
    console.log('No es igual a 1000');
} else { // Si no cumple con la condición
    console.log('Si el puntaje es 1000');
}

// Variables
const efectivo = 1000;
const carrito = 800;

if (efectivo > carrito) { // Si cumple la condición
    console.log('El usuario puede pagar');
} else {
    console.log('El usuario no puede pagar');
}

const rol = 'ADMINISTRADOR';

if (rol === 'ADMINISTRADOR') { // Primera condición
    console.log('Acceso al Sistema Permitido')
} else if (rol === 'EDITOR') { // El "else if" va despues del if y antes del else, para agregar otra condición, Si no se cumple la primera
    console.log('Acceso de Editor')
} else {
    console.log('Acceso denegado al sistema')
}
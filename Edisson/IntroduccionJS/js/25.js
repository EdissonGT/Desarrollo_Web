// Creando un Switch

const metodoPago = 'efectivo';

switch (metodoPago) { // Se coloca el nombre de la variable
    case 'cheque': // lo que se le asigno a la variable
        console.log('Revisaremos los fondos primero');
        break; // Tenemos que romper el case
    case 'tarjeta':
        console.log('Pagaste con Tarjeta');
        break;
    case 'efectivo':
        console.log('Pagaste con efectivo');
        break;
    default: // Se agrega un default por si no hay opciones en los cases
        console.log('Aún no has pagado');
        break;
}

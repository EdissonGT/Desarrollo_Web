// Async / await

function descargarNuevosClientes() {
    return new Promise ( resolve => {
        console.log('Descargando Clientes Espere...');

        setTimeout ( () => {
            resolve('Los clientes fueron descargados')
        }, 5000); // Tiene que tomar 5 segundos

    });
};

function descargarUltimosPedidos() {
    return new Promise ( resolve => {
        console.log('Descargando Pedidos Espere...');

        setTimeout ( () => {
            resolve('Los Pedidos fueron descargados')
        }, 3000); // Tiene que tomar 5 segundos

    });
};

async function app() {
    try {
        // const Clientes = await descargarNuevosClientes(); // Estamos llamando a las funciones de arriba
        // const Pedidos = await descargarUltimosPedidos();
        // // Este codigo de abajo se completa hasta que el de arriba haya sido completado
        // console.log(Clientes);
        // console.log(Pedidos);

        // Se crea un arreglo para poder llamar a las dos funciones, con el Promise.all
        const resultado = await Promise.all([descargarNuevosClientes(), descargarUltimosPedidos()])
        // Se muestra el resultado en pantalla y se accede a la posicion del arreglo
        console.log(resultado[0]);
        console.log(resultado[1]);
    } catch (error) {
        console.log(error);
    }
};

app();

// console.log('Hola');
// Async / await

function descargarNuevosClientes() {
    return new Promise ( resolve => {
        console.log('Descargando Clientes Espere...');

        setTimeout ( () => {
            resolve('Los clientes fueron descargados')
        }, 5000); // Tiene que tomar 5 segundos

    });
};

async function app() {
    try {
        const resultado = await descargarNuevosClientes();
        // Este codigo de abajo se completa hasta que el de arriba haya sido completado
        console.log(resultado);
    } catch (error) {
        console.log(error);
    }
};

app();

console.log('Hola');
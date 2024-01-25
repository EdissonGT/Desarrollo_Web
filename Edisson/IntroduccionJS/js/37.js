
async function obtenerEmpleados() {

    const archivo = 'empleados.json';

    // fetch(archivo)
    //     // then significa "ENTONCES VAMOS A OBTENER EL SIGUIENTE RESULTADO"
    //     .then( resultado =>  // Entonces el resultado va a ser un JSON 
    //         resultado.json() // si pongo como .text trae la respuesta como texto
    //     )
    //     .then( datos =>  {// Entonces accede a los datos
    //         const { empleados } = datos;
    //          console.log(empleados);

    //     // empleados.forEach(empleados => {
    //     //     // console.log(empleados);
    //     //     console.log(empleados.id); // Estamos recorriendo el arreglo para mostrar lo que deseamos
    //     //     console.log(empleados.nombre); // Con el punto accedemos a la propiedad
    //     //     console.log(empleados.puesto); // y asi es como mostramos en consola linea por linea lo que deseamos

    //     })

    const resultado = await fetch(archivo);
    // El resultado de arriba depende para mostrar abajo, primero se obtiene el archivo, luego mostramos el resultado
    const datos = await resultado.json();

    console.log(datos);
}

obtenerEmpleados();
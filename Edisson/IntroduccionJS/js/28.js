// This es una palabra Reservada de JS


const reservacion = {
    nombre: 'Edisson',
    apellido: 'Payés',
    total: 5000,
    pagado: false,
    informacion: function() {
                                // this hace referencia al objeto del cual se esta mandando a llamar
                                // this hace referencia al objeto de arriba.
                                // this hace referencia a las propiedades del objeto.
        console.log(`El Cliente ${this.nombre} y reservó y su cantidad a pagar es de ${this.total}`);
    }
}


// Ejemplo 2, con el Arrow function hace referencia a la ventana global.

const reservacion2 = {
    nombre: 'Edisson',
    apellido: 'Payés',
    total: 5000,
    pagado: false,
    informacion: () => {
        console.log(`El Cliente ${this.nombre} y reservó y su cantidad a pagar es de ${this.total}`);
    }
}

reservacion.informacion(); // Se manda a llamar el objeto y luego a la función.
reservacion2.informacion();
// El Arrow function hace referencia a la ventana global
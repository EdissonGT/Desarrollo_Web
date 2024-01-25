// PROMISES EN JavaScript

const usuarioAutenticado = new Promise( (resolve, reject) => {
    const auth = true;
    if (auth) {
        resolve('Usuario ha iniciado Sesión'); // El promise se CUMPLE
    } else {
        reject('Usuario no pudo iniciar Sesión');  // El Promise No se CUMPLE
    }
});

console.log(usuarioAutenticado);

// En los PROMISES EXISTEN 3 VALORES
// PENDING; No se ha cumplido pero tampoco se ha rechazado
// FULFILLED; Ya se cumplió
//  REJECTED; Se ha rechazado o no se pudo cumplir

// Se usan para conectar con una API

usuarioAutenticado
    .then( resultado => console.log(resultado))
    .catch( error => console.log(error));
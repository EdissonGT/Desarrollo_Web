
// Aprenderemos a usar Notification API
// document sirve para seleccionar todo el HTML desde JS.

const boton = document.querySelector('#boton'); // Para hacer referencia al ID de HMTL se usa "#".

// addEventListener ayuda a registrar un evento en la variable "boton".
boton.addEventListener('click', () => {
    Notification.requestPermission()
        .then(resultado => console.log(`El resultado es ${resultado}`))
});

if (Notification.permission == 'granted') { // Si el resultado de la notificacion es "granted", nos va a devolver una notificacion
    new Notification('Esta es una notificación', { // El titulo de la notificacion
        icon: 'img/alert.jpg', // Es una propiedad de Notification para agregar icono a la Notificacion
        body: 'Dev Edes3c'     // El cuerpo de la notificacion
    })
}
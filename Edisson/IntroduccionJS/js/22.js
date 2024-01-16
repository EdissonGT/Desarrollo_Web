
// Métodos de propiedad

const reproductor = {
    reproducir : function(id) { //Le estamos pasando un parametro 
        console.log(`Reproduciendo Canción con el ID: ${id}`) // Estamos mostrando el parametro que le pasamos a la funsion
    }, //Con la coma se agrega otra funsion al objeto 
    pausar : function(){ //No se paso ningun parametro
        console.log('Pausando...') //Solo estamos mostrando el texto 
    },
    crearPlaylist : function(nombre) {
        console.log(`Creando la playlist: ${nombre}`)
    },
    reproducirPlaylist : function(nombrePLaylist) {
        console.log(`Reproduciendo Playlist: ${nombrePLaylist}`)
    }
}

//Se creo un objeto con una funsion
reproductor.borrarCancion = function(id){
    console.log(`Eliminando la canción ${id}`)
}

reproductor.reproducir(1020); // Estoy colocando la variable, seguido de un punto con el nombre de la funsion
reproductor.pausar(); //Se coloca el nombre de la variable, luego el nombre de la funsion que estamos pasando 
reproductor.borrarCancion(20);
reproductor.crearPlaylist("Anuel");
reproductor.reproducirPlaylist("Mejores Canciones de Anuel");
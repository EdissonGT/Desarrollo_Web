// Clase para unir objetos
// Objeto

const producto = {
    // Propiedad o llave del objeto, si cambia el signo de = por :
    nombreProducto : "Monitor 20 Pulgadas",
    precio : 300,
    disponible : true
}

const medidas = {
    peso: '1kg',
    medida: '1m'
}

const nuevoProducto = { ...producto, ...medidas}; // Con los tres puntos se unen los dos objetos

// Mostrar mensaje en pantalla
console.log(producto);
console.log(nuevoProducto);
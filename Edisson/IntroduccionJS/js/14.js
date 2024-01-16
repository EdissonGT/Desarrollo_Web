// Arreglos o Arrays

// Los Arrays se crean con corchetes
// Los Arrays se pueden mostrar con log, o con table

const numero = [10,20,30,40,50];
console.log(numero);

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];
console.table(meses);

// const arreglo = ["Hola", 10, true, "si", null, {nombre: "Edisson", Trabajo: "SBO"}, [1,2,3,4]];

// console.log(arreglo);

console.log(numero[0]); // Con este codigo puedo acceder al valor del arreglo,
// se coloca el nombre del arreglo, luego en corchete la posicion en el index
console.log(numero[1]);
console.log(numero[2]);
console.log(numero[3]);
console.log(numero[4]);

// Conocer la extensión de un arreglo, cuantos valores tiene mi arreglo
console.log(meses.length);


// Codigo para recorrer arreglos
// Es propio de JS, function se agrega variable donde va a recorrer cada uno, y luego se muestra con console.
numero.forEach( function(numeros){
    console.log(numeros);
}
)
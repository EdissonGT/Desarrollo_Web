// Declaración de la Función

function sumar() { //aqui se crea la funsión dentro de las llaves
    console.log(10+10)
};

sumar(); // Se manda a llamar la funsión

// Expresión de la función
const sumar2 = function(){
    console.log(3+3)
};

sumar2();

//IIFE
(function(){ // Este tipo de funsión protege las variables y funciones de otros archivos 
    console.log('Esto es una funsión')
})(); // Esta funsión de manda a llamar ellas mismas
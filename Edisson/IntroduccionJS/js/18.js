// Declaración de la Función

sumar();// Se manda a llmar a la funsión
function sumar() { //aqui se crea la funsión dentro de las llaves
    console.log(10+10)
};


// Expresión de la función
sumar2();
const sumar2 = function(){ // esta se detecta como una variable
    console.log(3+3)
};

// JavaScript se ejecuta en dos vueltas, en la primera llamda registra a la funsion
// En la segunda llamda ya manda a llamar a la ejecución

// Primera etapa se registran las funciones y en la segunda se mandan a llamar a las funciones.
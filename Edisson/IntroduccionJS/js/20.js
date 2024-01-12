// Declaración de la Función


function sumar(num1 = 0, num2 = 0) { //num1 y num2 son parametros, actuan como variables
    //Cuando se coloca el igual a cero son valores por defecto.
    console.log(num1 + num2) //Los valores que se van a mostrar
};
sumar(20, 10); // Argumentos o los valores reales
sumar();
sumar(10);
sumar(2, 10);
sumar(3);

// Expresión de la función
const sumar2 = function(n1, n2){ //n1 y n2 son parametros, actúan como variables
    console.log(n1 + n2) //Los valores que se van a mostrar
};

sumar2(10,9); //Los valores que le estoy pasando a la funsión
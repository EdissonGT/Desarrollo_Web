function sumar(n1, n2) {
    return n1 + n2; // Retorna el valor, pero no lo muestra
};

const resultado = sumar(1, 3); // Guardamos el resultado en una variable "resultado"

console.log(resultado); //Mostramos el valor de "Resultado"


// Otro Ejemplo

let total = 0; // Declaramos la variable que se puede reutilizar

function agregarCarrito(precio) { //Creamos la funsion, que se le pasa un paramtro de "precio"
    return total += precio; //Retorna el valor a "total", se va a ir incrementando con el "+="
};

function calcularImpuesto(total) { //Creamos otra funsión para agregar el impuesto
    return 1.15 * total;
}

total = agregarCarrito(200); //Se pasa un valor a la funsion, para la variable a reutilizar.
total = agregarCarrito(400);
total = agregarCarrito(600);

console.log(total);

const totalAPagar = calcularImpuesto(total); //Se crea una variable para almacenar el Total a Pagar con el Impuesto, y a la vez se manda a llamar la otra funsion

console.log(`El total a pagar con Impuestos es de: $${totalAPagar}`); // Estamos mostrando el resultado con la variable que almacena el total a pagar

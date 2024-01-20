const num1 = 20;
const num3 = 30;

console.log(num1);

// Es aprueba de errores,
// Trae lo que quieras ejecutar

try {
    console.log(num2); // Intenta ejecutar este codigo, sion afectar el resto del codigo
} catch (error) {
    console.log('Hay un error') // Muestra si hay un error en la linea del TRY
}

console.log(num3);
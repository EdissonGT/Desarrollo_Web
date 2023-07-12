// String o Cadenas de Texto

const tweet = 'Aprendiendo JavaScript con el curso de Desarrollo Web Completo';
const producto2 = 'Monitor 20"';
const email = 'correo@correo.com'

// length es para la extension
console.log(tweet.length); // Devuelve cuantas palabras hay en la cadena de texto
console.log(producto2);

// IndexOf
console.log(tweet.indexOf('JavaScript')); // En la posicion numero 12 se encuentra JS, empieza desde 0
console.log(producto2.indexOf('Tablet')); // Cuando el resultado es -1, no lo encontro en la cadena de texto
console.log(email.indexOf('@'));

//Includes (retorna true o false)
console.log(tweet.includes('JavaScript')); // usando el include retorna si lo encontro con un true
console.log(producto2.includes('Tablet')); // retorna si no lo encontro con un false
// PRUEBAS DE HASH EN CONSOLA

//Sigue las indicaciones de tu profesor.
//Utiliza el backend desarrollado previamente.
//Utiliza el paquete Crypto de Node.js (para esta práctica no se permite el uso de otra librería).
    //Prueba su funcionamiento haciendo hash a un texto.
    //Comprueba que ingresando el mismo texto se genera el mismo hash.
    //Modifica ligeramente el texto y mira cuanto cambia el hash.

import crypto from 'crypto';

// Función para generar el hash
function generarHash(texto) {
  return crypto.createHash('sha256').update(texto).digest('hex');
}
// Texto original
const textoOriginal = "Hola123";
const hash1 = generarHash(textoOriginal);
const hash2 = generarHash(textoOriginal);

// Texto ligeramente modificado
const textoModificado = "Hola124";
const hash3 = generarHash(textoModificado);

// Mostrar resultados
console.log("Texto original:", textoOriginal);
console.log("Hash 1:", hash1);
console.log("Hash 2 (mismo texto):", hash2);
console.log("¿Hash 1 y 2 iguales?", hash1 === hash2);

console.log("\nTexto modificado:", textoModificado);
console.log("Hash 3:", hash3);
console.log("Hash 1 y 2:", hash1);
console.log("¿Hash original y modificado iguales o parecidos?", hash1 === hash3);
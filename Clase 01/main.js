console.log('Hola Mundo');

//Tipo de Dato Primitos
let nombre = "Ivan"; 
let edad = 23; 
let esMayordeEdad = true;
let saldo;
let cuenta = null;
let id = Symbol("id");
let numeroGrande = 12482403502347607340n;


console.log(typeof nombre);
console.log(typeof edad);
console.log(typeof esMayordeEdad);
console.log(typeof saldo);
console.log(typeof cuenta);

console.log(nombre);
console.log(edad);


/**
 * Tipos de Datos:
 * 
 * Este es un comentario de multple linea
 */
let persona = {
    nombre: "Ivan",
    edad: 23,
    nacionalidad: "Mexicano"
}

let numeros = [1,2,3,4,5]

function suma(a,b) { 
    return a + b
}

let fecha = new Date();

console.log(persona.edad);
console.log(numeros[0]);
console.log(fecha);
console.log(suma(2,5));

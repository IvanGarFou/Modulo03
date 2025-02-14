// Si aprobe o reprobe
let nota = 5.9;
const notaAprobatoria = 6;

if(nota >= notaAprobatoria){
    console.log("Estas aprobado");   
} else {
    console.log("Estas reprobado");
}

let temp = 40;

if (temp > 30) {
    console.log("Te estas derritiendo de calor");
}else if(temp >= 21 && temp <= 29){
    console.log('Esta haciendo un clima agradable');
}else {
    console.log('Te estas congelando');
}


let edad = 23;
let resultado = (edad >= 18) ? "Es mayor de edad" : "Es menor de edad";

console.log(resultado);


console.log( 1 === '1');
console.log( 1 == '1' || 1 === '1');


let dia = 'domingo'
switch(dia){
    case 'lunes':
        console.log('Inicio semana');
        break;
    case 'jueves':
        console.log('Jueves chido');
        break;
    default:
        console.log('No se que dia es hoy;'); 
}

console.log('Hola');


//Valor aleatorio
let valorRandom = Math.floor(Math.random() * 101)
console.log(valorRandom);


function estacionDelAño(mes) {
    switch (mes) {
      case 3:
      case 4:
      case 5:
        console.log("Primavera");
        break;
      case 6:
      case 7:
      case 8:
        console.log("Verano");
        break;
      case 9:
      case 10:
      case 11:
        console.log("Otoño");
        break;
      case 12:
      case 1:
      case 2:
        console.log("Invierno");
        break;
      default:
        console.log("Mes no válido");
    }
  }
  
  estacionDelAño(4);  // Primavera
  estacionDelAño(11); // Otoño


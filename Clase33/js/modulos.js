//Llamar un export desde el archivo constantes
import saludar, { PI_EXPORT, Saludar, usuario } from "./constantes.js"
//import { sumar, restar  } from  "./aritmeticas.js";
//Se puede usar alias
import { aritmetica as calculo } from  "./aritmeticas.js";


console.log("Archivo modulos.js")
console.log(PI_EXPORT, usuario);
//console.log(sumar(1, 2));
//console.log(restar(10, 2)); 
//console.log(aritmetica.sumar(1, 2));
//console.log(aritmetica.restar(10, 2)); 
console.log(calculo.sumar(1, 2));
console.log(calculo.restar(10, 2)); 
//saludar(); //Llamas si hacer referencia al objeto como en sumar
saludar();

let saludo = new Saludar();
saludo;
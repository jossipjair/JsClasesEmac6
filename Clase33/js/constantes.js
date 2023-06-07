'use-strict'

export const PI_EXPORT = Math.PI;

export let usuario = "Jair";
//export default let password = "qwerty";
let password = "qwerty";

//export default password;

const hello =()=>{
    console.log("Hola");
}


//export default siginifica que cuando se importe el archivo la funcion se puede llamar directamente a la funcion

//export default function saludar(){
export default function saludar(){
    console.log("Hola Módulos +ECS6");
}


export class Saludar{
    constructor(){
        console.log("Hola Clases +ECS6");
    }

}
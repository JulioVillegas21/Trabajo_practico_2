import  promptSync from "prompt-sync";   
const prompt = promptSync();

import type {Tareas} from "Tareas";
import {crearTarea} from "Tareas";
import { menu } from "./Menus";


function main (): void {

    let opcion : number = 0;
    let tarea : Tareas [] = [] ; 
    do{
     menu();

     opcion=parseInt(prompt("Ingrese una opcion"));

     if (opcion>3 || opcion<0){
        console.log("la opcion es incorrecta, porfavor vuelva a intentarlo");
        continue;
     }

     switch(opcion){
        case 1 : 
        if(tarea.length===0){
            console.log("No hay tareas creadas")
            break;
        }

        

        case 2 : 
        if(tarea.length===0){
            console.log("No hay tareas creadas")
            break;
        }

        break;

        case 3:
        
        tarea.push(crearTarea(tarea));
        break;

        case 0:
        console.log("Saliendo....");
        break;
     }
    }while (opcion!=0);



    
}
import  promptSync from "prompt-sync";   
const prompt = promptSync();


import {menu} from "./interfas"

import type { Tareas } from "./Tarea";

import { crearTarea } from "./CrearTarea";



function main (): void {

    let opcion : number = 0;
    let tareas : Tareas[] = []

    do{

        menu();
        opcion = parseInt(prompt("Ingrese una opcion: "));

        // control para las opciones 
        if (opcion>3 || opcion<0){
        console.clear();
        console.log("la opcion es incorrecta, porfavor vuelva a intentarlo");
        continue;
        }
        
        switch(opcion){

            // Caso de "VER MIS TAREAS "

            case 1 :
                console.clear();
                if(tareas.length===0){
                    console.log("No hay tareas creadas")
                    break;
                }
               // VerTarea(tareas);

            break;

            // Caso de "BUSCAR UNA TAREA"
            
            case 2:
                if(tareas.length===0){
                    console.log("No hay tareas creadas")
                    break;
                }
                //BuscarTarea(tareas);

            break;

            //Caso de "AGREGAR TAREAS"
            case 3:
            
                console.clear();
                tareas.push(crearTarea(tareas));
                console.clear();
                console.log("Tarea creada correctamente");

            break;

            case 0:
                console.log("Saliendo....");
            break;    
        }
    }while (opcion != 0);
}

main();
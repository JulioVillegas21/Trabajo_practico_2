import  promptSync from "prompt-sync";   
const prompt = promptSync();

import type { Tareas } from "./Tareas";
import { crearTarea } from "./Tareas";
import { menu } from "./Menus";
import { VerTarea } from "./VerTareas";
import BuscarTarea from "./BuscarTarea";




function main (): void {

    let opcion : number = 0;
    let tareas : Tareas [] = [] ; 
    do{

     menu();
     opcion=parseInt(prompt("Ingrese una opcion: "));
     if (opcion>3 || opcion<0){
        console.clear();
        console.log("la opcion es incorrecta, porfavor vuelva a intentarlo");
        continue;
     }

        

     switch(opcion){
        case 1 : 
        console.clear();
        if(tareas.length===0){
            console.log("No hay tareas creadas")
            break;
        }

        VerTarea(tareas);

        break;

        case 2 : 
            if(tareas.length===0){
                console.log("No hay tareas creadas")
            break;
        }

        BuscarTarea(tareas);

        console.clear();

        break;

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
    }while (opcion!=0);



    
}

main();
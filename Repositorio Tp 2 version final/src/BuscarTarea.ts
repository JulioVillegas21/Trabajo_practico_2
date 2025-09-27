import PromptSync from "prompt-sync";
import type { Tareas } from "./Tarea";
import { VerTarea } from "./Tarea";

export default function BuscarTarea(tareas : Tareas[]){
    let encontrada :boolean = false;
    console.clear();
    console.log("Indique el titulo de la tarea a buscar");
    let titulo : string = prompt("titulo: ")?.trim() || "";

    for(let i : number =0; i< tareas.length  ; i++){
        if(tareas[i].titulo === titulo){
        console.log("tarea encontrada");
        const tarea = tareas[i];
        console.log(`[${i + 1}] ${tarea.titulo}`);
        encontrada = true;
        VerTarea(tarea);
        
    }

    if (!encontrada){
        console.log("Tarea no encontrada, Volviendo al menu ...");
        return;
    }
 }
 
}
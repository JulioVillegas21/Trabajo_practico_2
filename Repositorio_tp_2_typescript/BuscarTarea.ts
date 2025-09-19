import promptSync from 'prompt-sync';//ESM
const prompt = promptSync();
import type { Tareas } from './Tareas';
import { EditarTarea } from './VerTareas';



function VerDetalle(tarea:Tareas){
    console.clear();
    console.log("============================================================")
    console.log("\n\n\nEsta es la tarea que elegiste:\n");
    console.log(`          Título: ${tarea.titulo}\n\n`);
    console.log(`° Descripción: ${tarea.descripcion}\n`);
    console.log(`° Estado: ${tarea.estado}\n`);
    console.log(`° Dificultad: ${tarea.dificultad}\n`);
    if(tarea!.fechavencimiento == null){
        console.log("° Vencimiento: No cargado aun\n")
    }
    else{
        console.log(`° Vencimiento: ${tarea!.fechavencimiento}\n`);
    }
    console.log(`° Ultima edicion: ${tarea!.fechaultimaEdicion}\n\n\n`);
    console.log("============================================================")
    EditarTarea(tarea);
    
}

export default function BuscarTarea(tareas : Tareas[]){
    console.clear();
    console.log("introduce el titulo de la tarea a Buscar\n");

    let titulo : string = prompt("° titulo: ")?.trim() || "";

    let cont :number = 0;

    for(let i : number =0; i< tareas.length  ; i++){
        if(tareas[i].titulo === titulo){

        console.log("tarea encontrada");

        const tarea = tareas[i];

        console.log(`[${i + 1}] ${tarea.titulo}`);

        cont = 1;

        VerDetalle(tarea);
        
    }

    if (cont==0){
        console.log("Tarea no encontrada, Volviendo al menu ...");
        return;
    }
 }
 
}
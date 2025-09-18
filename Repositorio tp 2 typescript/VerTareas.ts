import PromptSync from "prompt-sync";
const prompt = PromptSync();

import { VerTareas } from "./Menus";
import type { Tareas } from "./Tareas";
import { dificultad , Estado} from "./Tareas";

function mostrarTodasTareas(tareas:Tareas[]){
    console.clear();
    console.log("                    Tareas Existentes\n\n")
    for(let i : number = 0 ; i<tareas.length; i++){
        let titulo : string = tareas[i]!.titulo; //El signo ! es para decirle al copilador que no va a ser vacio lo que hay porque cree que puede haber un vacio 
        console.log(`[${i + 1}] ${titulo}`)
    }

    VerDetalle(tareas);
}

function VerDetalle(tareas:Tareas[]){

    let tarea : Tareas;
        
    console.log("Desea ver los detalles de alguna?");
    console.log("Introduce el numero de la tarea o \"0\" para volver");
    let opcion : number = parseInt(prompt("Ingrese una opción: "));

    while (opcion != 0 && ( Number.isNaN(opcion) || opcion < 0 || opcion > tareas.length)){
        console.log ("La opcion que ha ingresado es incorrecta, Vuelvalo a intentar");
        opcion = parseInt(prompt("Ingrese una opción: "));
    }
    
    
    if(opcion === 0){
        return;
    }

    else{

        tarea = tareas[opcion - 1]!;

        console.log("Esta es la tarea que elegiste:\n");
        console.log(`Título: ${tarea!.titulo}\n`);
        console.log(`Descripción: ${tarea!.descripcion}\n`);
        console.log(`Estado: ${tarea!.estado}`);
        console.log(`Dificultad: ${tarea!.dificultad}`);
        console.log(`Creacion: ${tarea!.fechaCreacion}`);
        if(tarea!.fechavencimiento == null){
            console.log("Vencimiento: No cargado aun")
        }
        else{
            console.log(`Vencimiento: ${tarea!.fechavencimiento}\n`);
        }
        console.log(`Creacion: ${tarea!.fechaultimaEdicion}`);

    }

    EditarTarea(tarea!);
}
    


function EditarTarea(tarea : Tareas){

    console.clear();

    let entrada : string ;

    console.log("Si desea editar la tarea ingrese E, o presione 0 para volver al menu principal");
    
    let opcion : string = prompt("").trim();


    while ( opcion == "" ||(opcion.toLocaleLowerCase() != "e" && opcion != "0")){
        console.log("Porfavor ingrese una opcion valida");
        opcion = prompt("").trim();
    }

    if(opcion == "0"){
        return;
    }

    //descripcion 


    console.log("Estas editando la tarea "+tarea.titulo);
    console.log("-si desea mantener los valores de un atributo, simplemente aprete ( \"ENTER\" )");
    console.log("-Si desea borrar La descripcion ingrese ( \"0\" )");

    entrada = prompt("Ingrese la nueva DESCRIPCION: ")?.trim()|| "";


    if(entrada.length > 0){
        if(entrada === "0"){
            tarea.descripcion = "";
        }
        else{
        tarea.descripcion = entrada;
        }
    }
    console.clear();

    // Estado

    console.log("Estas editando la tarea "+tarea.titulo);
    console.log("-si desea mantener los valores de un atributo, simplemente aprete ( \"ENTER\" )");

    for(let i : number = 0 ; i<Estado.length ; i++){
        console.log(`[${i+1}] ${Estado[i]}`);
    }


    entrada = prompt("Ingrese el nuevo estado: ")?.trim()|| "";

    while(entrada != "" && ((isNaN(parseInt(entrada)) || Estado.length < parseInt(entrada) || parseInt(entrada)<0))){

        console.log("Porfavor ingrese una opcion correcta");

        for(let i : number = 0 ; i < Estado.length ; i++){
        console.log(`[${i+1}] ${Estado[i]}`);
        }

    }

    if(entrada.length>0){
        tarea.estado=Estado[parseInt(entrada)-1]!;
    }


    //dificultad

    console.clear();
    console.log("Estas editando la tarea "+tarea.titulo);
    console.log("-si desea mantener el valor simplemente aprete ( \"ENTER\" )");
    console.log("ingrese la nueva DIFICULTAD ");

    for(let i : number = 0 ; i < dificultad.length ; i++){
        console.log(`[${i+1}] ${dificultad[i]}`);
    }

    entrada= prompt("").trim() || "";
    
    while(entrada != "" && ((isNaN(parseInt(entrada)) || dificultad.length < parseInt(entrada) || parseInt(entrada)<0))){

        console.log("Porfavor ingrese una opcion correcta");

        for(let i : number = 0 ; i < dificultad.length ; i++){
        console.log(`[${i+1}] ${dificultad[i]}`);
        }

    }

    if(entrada.length>0){
        tarea.dificultad=dificultad[parseInt(entrada)-1]!;
    }

}
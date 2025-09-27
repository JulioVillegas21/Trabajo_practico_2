import PromptSync from "prompt-sync";
const prompt = PromptSync();

import type { Tareas } from "./Tarea";
import {estado, dificultad} from "./Tarea"


import { Confirmacion, pedirNumero } from "./Controles";





export function crearTarea(tareas:Tareas[]): Tareas {


    /* la variable validacion sera utilizada en el "do" de cada elemento a cargar en la tarea 
    Titulo 
    Descripcion
    */

    let validacion: boolean = true;


    /* Incializo la tarea para poder ya tener los datos de default */

    let nuevaTarea: Tareas = {
        titulo: "Default",
        descripcion: "Default",
        estado: estado[0],
        fechaCreacion: new Date(),
        fechaultimaEdicion: new Date(),
        fechavencimiento: null,
        dificultad: dificultad[0],
    }


    //Variable la cual utilizo para guardar los datos de entrada 

    let input:string = "";
    // Validacion titulo de la tarea (100 caracteres maximo)
   do{
    validacion = false;
    input = prompt("Ingrese el título de la tarea (max 100 caracteres): ")?.trim()||""; // trim sirve para eliminar espacios blancos al pricipio y al final
    
    if(input.length=== 0){
        console.clear();
        console.log("El titulo no puede estar vacio, por favor ingrese un titulo valido.");
        validacion = true;
        continue;
    }


    if(input.length > 100){
        //Confirmacion se utilizara simplemente para poner si quiere acortar el titulo o no quiere acortar el titulo  
        if( Confirmacion("El Titulo supero los 100 caracteres, desea recortarlo ?").toLocaleLowerCase() === "y"){
            nuevaTarea.titulo = input.slice(0,100);
        }
        else{
            console.clear();
            validacion = true;
            continue;
        }
    }

    for (let i : number = 0; i<tareas.length ; i++){
        if (input.toLowerCase() == tareas[i].titulo.toLowerCase()){
            console.clear();
            console.log("Ya se encuentra una tarea con ese mismo titulo, porfavor introduzca uno nuevo")
            validacion=true;
        }
    }

    }while(validacion);
    nuevaTarea.titulo = input;


    console.clear();
    let descripcionInput: string = "";

    //Descripcion 
    // Validacion descripcion de la tarea (500 caracteres maximo)

    do{
        validacion = false;

        descripcionInput = prompt("Ingrese la descripcion de la tarea (max 500 caracteres): ")?.trim() || ""; // elimino los caracters vacios
        
        if(descripcionInput.length === 0){ 
            if(Confirmacion("Esta dejando la descripcion vacia, desea hacerlo ? ").toLowerCase() === "y"){
                validacion = false;
            }else{
                validacion = true;
            }
        }
        if(descripcionInput.length > 500){
            if(Confirmacion("la descripcion supero los 500 caracteres, desea recortarla ?").toLowerCase() === "y"){
                descripcionInput = descripcionInput.slice(0,500);
                validacion = false;
            }else{
                validacion = true;
            }
        }
    }while(validacion);
    console.clear();
    nuevaTarea.descripcion = descripcionInput;


    //Estado
    console.log("Ingrese el estado de la tarea");
    for(let i : number = 0 ; i<estado.length; i++){
        console.log(`[${i+1}] ${estado[i]}`);
    }

    //Funcion que verifica que todo este en un rango de valores, paso como parametro 1 y estado.legth-1 ya que el array tiene 4 elementos pero el 0 es el "" y tambien porque la cuenta empieza del 0 no del 1
    //El true es para permitir espacios vacios, es este caso el enter 
    //el retorno es un numero,si pone enter de como retorno 1 - 1 (termina sindo pendiente), si es 1 entonces hace 1-1 = pendiente , si es 2 entonces hace 2-1 = en curso , si hace .....

    nuevaTarea.estado = estado [pedirNumero( "Porfavor ingrese una de las opcines, Precionar ENTER dejara la tarea con el estado en default (Pendiente)", 1 , estado.length, true )-1]; 
    console.clear();

    //Dificultad
    //utilizara la misma logica que se uso en estado 
    console.log("Ingrese la dificultad de la tarea");

    for(let i : number = 0 ; i < dificultad.length ; i++){
        console.log(`[${i+1}] ${dificultad[i]}`);
    }
    nuevaTarea.dificultad = dificultad[pedirNumero( "Porfavor ingrese una de las opcines, Precionar ENTER dejara la tarea con la dificultad en default (facil)", 1 , dificultad.length, true )-1]
    console.clear();

    //Fecha de vencimiento 
    //Al poner false como parametro desactivo el poder apretar espacio para dejar vacio 
    console.log("ingrese la fecha de vencimiento");
    let dia : number = pedirNumero("Porfavor ingrese el \" Dia \" de vencimiento ", 1 , 31, false);
    let mes : number = pedirNumero("Porfavor ingrese el \" MES \" de vencimiento ", 1 , 21,false);
    let anio : number= pedirNumero("Porfavor ingrese el \" AÑO \" de vencimiento ", 1900 ,2100 ,false);
    nuevaTarea.fechavencimiento= new Date(anio, mes , dia , );
    return nuevaTarea;
}
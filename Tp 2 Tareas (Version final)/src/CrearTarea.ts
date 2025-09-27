import PromptSync from "prompt-sync";
const prompt = PromptSync();

import type { Tareas } from "./Tarea.ts";
import {estado, dificultad} from "./Tarea"


import { Confirmacion, pedirNumero } from "./Controles";



/*pongo como parametro opcional el nuevaTarea ya que es opcional segun si se utiliza para editar 
Culpa de ello en cada asginacion afirmo que el objeto tiene algo y no se trata de algo nulo
Eso lo hago con " ! " con cada asignacion*/

export function CrearTarea(tareas:Tareas[]): Tareas {

    /* la variable validacion sera utilizada en "do" de cada elemento a cargar en la tarea 
    Titulo 
    Descripcion
    */

    let validacion: boolean = true;

    /* Incializo la tarea para poder ya tener los datos de default */

    let nuevaTarea:Tareas = {
        titulo: "Default",
        descripcion: "Default",
        estado: estado[0],
        fechaCreacion: new Date(),
        fechaultimaEdicion: new Date(),
        fechavencimiento: new Date(),
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
        if( Confirmacion("El Titulo supero los 100 caracteres, desea recortarlo ? : ").toLocaleLowerCase() === "y"){
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
            if(Confirmacion("Esta dejando la descripcion vacia, desea hacerlo ?: ").toLowerCase() === "y"){
                validacion = false;
            }else{
                validacion = true;
            }
        }
        if(descripcionInput.length > 500){
            if(Confirmacion("la descripcion supero los 500 caracteres, desea recortarla ?: ").toLowerCase() === "y"){
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

    /* la funcion de "pedir numero" sirve para pedir un numero del rango que tengo en el arreglo 
    los parametros esta automatizados para poder agregar estados sin necesidad de cambiar todo el codigo
    el primer parametro es un mensaje, segundo es el valor minimo que puede agarrar el usuario, tercero es la longitud del arreglo
    y el cuarto es el parametro que permite dejar valores pode default (Siempre sera el primer valor del arreglo*/

    /*pedir numero se llama asi porque originalmente nacio para la fecha pero muto para otras cosas mas jajajaj
    Gracias a eso podemos utilizarla en mas lugares del codigo*/

    nuevaTarea.estado = estado [pedirNumero( "Porfavor ingrese una de las opcines, Precionar ENTER dejara la tarea con el estado en default (Pendiente): ", 1 , estado.length, true )-1]; 
    console.clear();

    //Dificultad
    //utilizara la misma logica que se uso en estado 
    console.log("Ingrese la dificultad de la tarea");

    for(let i : number = 0 ; i < dificultad.length ; i++){
        console.log(`[${i+1}] ${dificultad[i]}`);
    }
    nuevaTarea.dificultad = dificultad[pedirNumero( "Porfavor ingrese una de las opcines, Precionar ENTER dejara la tarea con la dificultad en default (facil): ", 1 , dificultad.length, true )-1]
    console.clear();
    console.log("ingrese la fecha de vencimiento");
    let dia : number = pedirNumero("Dia de vencimiento de la tarea: ", 1 , 31, false);
    let mes : number = pedirNumero("Mes de vencimiento de la tarea: ", 1 , 12,false);
    let año : number = pedirNumero("Año de vencimiento de la tarea: ", 1900 ,2100 ,false);
    nuevaTarea.fechavencimiento= new Date(año, mes , dia);
    console.clear()
    

    nuevaTarea.fechaultimaEdicion = new Date();

    return nuevaTarea;
}
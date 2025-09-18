import  promptSync from "prompt-sync";   
const prompt = promptSync();
import {SiNo} from "./validaciones";


interface Tareas{
    titulo: string , 
    descripcion: string ,
    estado: string ,
    fechaCreacion: Date ,
    fechavencimiento: Date | null ,
    dificultad: string ,
    fechaultimaEdicion: Date ,
};

let dificultad : string[] = ["Facil 🌕🌑🌑", "Medio 🌕🌕🌑", "Dificil 🌕🌕🌕"];
let Estado : string[] = ["Pendiente" , "En curso", "Terminada" , "Cancelada"];

function crearTarea(tareas:Tareas[]): Tareas {
    let verificador: boolean = false;

   let nuevaTarea: Tareas = {
        titulo: "Default",
        descripcion: "Default",
        estado: "pendiente",
        fechaCreacion: new Date(),
        fechaultimaEdicion: new Date(),
        fechavencimiento: null,
        dificultad: "🌕🌑🌑"
        
   }
    let input: string = "";

    // Validacion titulo de la tarea (100 caracteres maximo)

   do{

    verificador = false;


    input = prompt("Ingrese el título de la tarea (max 100 caracteres): ")?.trim() || ""; // trim sirve para eliminar espacios blancos al pricipio y al final

    if(input.length === 0){
        console.log("El titulo no puede estar vacio, por favor ingrese un titulo valido.");
        verificador = true;
        continue;
    }

    if(input.length > 100){
        console.log("El titulo supera los 100 caracteres, Desea descartar los caracteres adicionales?.\n[y]-No [N]-No.");
        input = prompt("Ingrese su opcion: ")?.trim() || "";

        input = SiNo(input); // Valido que el usuario ingrese Y o N

        if(input.toLowerCase() === "y"){
            nuevaTarea.titulo = input.slice(0,100);
            verificador = false;
        }
        else{
            verificador = true;
            continue;
        }
    }

    for (let i : number = 0; i<tareas.length ; i++) {
        if(tareas[i]!.titulo == nuevaTarea.titulo){
            console.log("El titulo ya existe, ingrese uno diferente.");
            nuevaTarea.titulo = "";
            verificador= true;
            break;
        }
        
    }
    }while(verificador);
    console.clear();


    nuevaTarea.titulo = input;

    let descripcionInput: string = "";





    // Validacion descripcion de la tarea (500 caracteres maximo)

    do{
        descripcionInput = prompt("Ingrese la descripcion de la tarea (max 500 caracteres): ")?.trim() || ""; // elimino los caracters vacios
        
        if(descripcionInput.length === 0){
            console.log("Esta dejando la descripcion vacia, desea dejarla asi?\n[y]- Si [N]- No.");
            input = prompt("Ingrese su opcion: ")?.trim() || "";

            input = SiNo(input); // Valido que el usuario ingrese Y o N

            if(input.toLowerCase() === "y"){
                verificador = false;
            }else{
                verificador = true;
            }
        
        }

        if(descripcionInput.length > 500){
            console.log("La descripcion supero los 500 caracteres, Desea descartar los caracteres adicionales?.\n[y]-No [N]-No.");
            
            input = prompt("Ingrese su opcion: ")?.trim() || "";

            input = SiNo(input); // Valido que el usuario ingrese Y o N

            if(input.toLowerCase() === "y"){
                descripcionInput = descripcionInput.slice(0,500);
                verificador = false;
            }else{
                verificador = true;
            }

        }
    }while(verificador);
    
    nuevaTarea.descripcion = descripcionInput;
    console.clear();
    return nuevaTarea;
}


export {crearTarea , dificultad , Estado};
export type {Tareas};

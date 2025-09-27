import PromptSync from "prompt-sync";
const prompt = PromptSync();
import { Confirmacion, pedirNumero } from "./Controles";

export const dificultad : string[] = ["Facil 🌕🌑🌑", "Medio 🌕🌕🌑", "Dificil 🌕🌕🌕"];
export const estado : string[] = ["Pendiente" , "En curso", "Terminada" , "Cancelada"];

export interface Tareas{
    titulo: string , 
    descripcion: string ,
    estado: string ,
    dificultad: string ,
    fechaCreacion: Date ,
    fechavencimiento: Date ,
    fechaultimaEdicion: Date ,
};


export function VerTarea(tarea:Tareas){

    console.log("----------- Tarea seleccionada -----------\n");

    console.log(`Titulo : ${tarea.titulo}\n`);

    console.log(`Descripcion : ${tarea.descripcion}\n`);

    console.log(`Estado : ${tarea.estado}\n`);

    console.log(`Dificultad ${tarea.dificultad}\n`);

    console.log(`fecha de creacion : ${tarea.fechaCreacion}\n`);
    
    if (tarea.fechavencimiento != null){
        console.log(`Fecha de vencimiento : ${tarea.fechavencimiento}\n`);
    }
    else{
        console.log("Esta tarea se encuentra sin fecha de vencimiento\n");
    }

    console.log(`fecha de ultima edicion : ${tarea.fechaultimaEdicion}\n`);

    console.log("--------------------------------------------\n");

}


export function VerTituloTareas (tareas: Tareas []){
    for(let i : number = 0 ; i < tareas.length ; i++){
        console.log(`[${i+1}]. ${tareas[i].titulo}`);
    }
}

export function EditarTarea (tarea:Tareas){

    let validacion: boolean = true;

    let input:string = "";

    console.clear();
    let descripcionInput: string = "";

    //Descripcion
    if(Confirmacion("Desea cambiar la descripcion de la tarea ?")==="y"){
        do{
            validacion = false;

            descripcionInput = prompt("Ingrese la descripcion de la tarea (max 500 caracteres): ")?.trim() || ""; // elimino los caracters vacios
        
            if(descripcionInput.length === 0){ 
                if(Confirmacion("Esta dejando la descripcion vacia, desea hacerlo ? ").toLowerCase() === "y"){
                    validacion = false;
                }

                else{
                validacion = true;
                }
            }
            if(descripcionInput.length > 500){
                if(Confirmacion("la descripcion supero los 500 caracteres, desea recortarla ?").toLowerCase() === "y"){
                    descripcionInput = descripcionInput.slice(0,500);
                    validacion = false;
                }
                
                else{
                    validacion = true;
                }
            }
        }while(validacion);
        console.clear();
        tarea.descripcion = descripcionInput;
    }
    


    //Estado

    if(Confirmacion ("Desea cambiar el estado de la tarea?")==="y"){

        console.log("Ingrese el estado de la tarea");
        for(let i : number = 0 ; i<estado.length; i++){
            console.log(`[${i+1}] ${estado[i]}`);
        }
        tarea.estado= estado [pedirNumero( "Porfavor ingrese una de las opcines", 1 , estado.length, false )-1]; 
        console.clear();
    }

    //Dificultad
    //utilizara la misma logica que se uso en estado 

    if(Confirmacion ("Desea cambiar el estado de la tarea?")==="y"){

       for(let i : number = 0 ; i < dificultad.length ; i++){
            console.log(`[${i+1}] ${dificultad[i]}`);
        }
        tarea.dificultad = dificultad[pedirNumero( "Porfavor ingrese una de las opcines de dificultad", 1 , dificultad.length, false )-1]
    }
    console.clear();
    console.log("ingrese la fecha de vencimiento");
    let dia : number = pedirNumero("Dia de vencimiento de la tarea: ", 1 , 31, false);
    let mes : number = pedirNumero("Mes de vencimiento de la tarea: ", 1 , 12,false);
    let año : number = pedirNumero("Año de vencimiento de la tarea: ", 1900 ,2100 ,false);
    tarea.fechavencimiento= new Date(año, mes , dia);
    return tarea;
}






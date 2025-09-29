import PromptSync from "prompt-sync";
const prompt = PromptSync();

import type { Tareas } from "./Tarea";
import { EditarTarea, estado, VerTarea } from "./Tarea";
import { FormaDeVer, VerTipos } from "./Interfas";
import { Confirmacion, pedirNumero } from "./Controles";


function Seleccion(tareas:Tareas[], indice:number, formaOrdenada:string): Tareas {
    
    let indices : number[]=[] ;
    let contador : number=0;

    console.clear();
    console.log(`  --------  Tareas Ordenadas de forma ${formaOrdenada}  --------  `)
    console.log(`Estado: ${estado[indice]}`);
    console.log("");

    

    
    for(let i : number = 0 ; i <tareas.length; i++){

        if (tareas[i].estado=== estado[indice]){
        contador++;
        
        indices.push(i);
        console.log(`[${contador}]. ${tareas[i].titulo}`);
        }

    }
    console.log("");

    return tareas[indices[pedirNumero("Porfavor seleccione una tarea para visualizar: ", 1 , indices.length , false)-1]];

}


//Tipo de ordenamiento 

function Titulo (tareas:Tareas[]) :Tareas[]{
 let ayudante : Tareas ;
    //metodo de resolucion : Ordenamiento burbuja 
    for(let i:number = 0; i<tareas.length-1;i++){
        for(let j : number = 0 ; j< tareas.length-1 ; j++){
            /*funcion que busque con la ia
            devuelve -1 si el titulo 1 es menor al titulo 2 , 0 si son iguales y 1 si es titulo 2> titulo 1
            parametro "es" = hay letras que en ingles van antes que en español 
            sensitivity = base lo ponemos para no prestar atencion a las mayusculas y tildes 
            ignorePunctuation: true  ignora los guiones y etc */
            if ( tareas[j].titulo.localeCompare(tareas[j+1].titulo,`es`,{sensitivity: 'base', ignorePunctuation: true})==1){

                // ojo que estoy intercambiando direcciones

                ayudante = tareas[j];

                tareas[j] = tareas[j+1]

                tareas[j+1] = ayudante;

            }
        }
        
    }

    return tareas;
}

//Tipo de ordenamiento

function FechaVencimiento(tareas:Tareas[]):Tareas[]{
    let ayudante : Tareas ;
    for(let i:number = 0; i<tareas.length-1;i++){
        for(let j : number = 0 ; j< tareas.length-1 ; j++){
            if (tareas[j].fechaCreacion.getTime() >tareas[j + 1].fechaCreacion.getTime()) {
                let aux = tareas[j];
                tareas[j] = tareas[j + 1];
                tareas[j + 1] = aux;
            }
        }
    }

    return tareas;
}
//Tipo de ordenamiento

//getTime calcula los milisecgundos de 1970 hasta la fecha y compara 
function FechaCreacion(tareas: Tareas[]): Tareas[] {
    for (let i:number = 0; i < tareas.length - 1; i++) {
        for (let j:number = 0; j < tareas.length - 1; j++) {
            if (tareas[j].fechaCreacion.getTime() > tareas[j + 1].fechaCreacion.getTime()) {
                let aux = tareas[j];
                tareas[j] = tareas[j + 1];
                tareas[j + 1] = aux;
            }
        }
    }
    return tareas;
}



function Ordenamientos(tareas:Tareas[] , indice : number ){
    let tarea : Tareas;
    switch(pedirNumero("Porfavor eliga una opcion: ",1,3,false)){
        case 1:
            
            //ojo que hay una funcion que recibe otra funcion

            tarea = Seleccion( Titulo(tareas) ,indice-1, "Alfabetico ascendente");

            VerTarea(tarea);

            if(Confirmacion("Desea modificar los datos de la tarea?") == "y"){
                EditarTarea (tarea)

            }
            else{
                console.log("Volviendo al menu...")
            }

            break;

        case 2:

            tarea = Seleccion( FechaVencimiento(tareas) ,indice-1, "fecha de vencimiento ascendente");

            VerTarea(tarea);

            if(Confirmacion("Desea modificar los datos de la tarea?") == "y"){
                EditarTarea (tarea)

                }
                else{
                console.log("Volviendo al menu...")
            }

        break;

        case 3:

            tarea = Seleccion( FechaCreacion(tareas) ,indice-1, "fecha de creacion ascendente");
            VerTarea(tarea);

            if(Confirmacion("Desea modificar los datos de la tarea?") == "y"){
                EditarTarea (tarea)
            }
            
            else{
                console.log("Volviendo al menu...")
            }
        break;
    }

}


function VisualizarTipoTarea(tareas:Tareas[], indice : number){
    console.clear();

    let opcion : number ;

    let tarea:Tareas;

    let validacion:boolean = false ;

    if( indice < 4 ){

    //Verifica si tiene tareas del tipo que eligio

    for(let i:number = 0; i<tareas.length;i++){
        if(tareas[i].estado == estado[indice-1]){
            validacion=true;
        }
    }

    if (!validacion){
        console.clear();
        console.log(`No tiene tareas del tipo ${estado[indice-1]}`);
        return;
    }

    FormaDeVer();

    console.log("");

    Ordenamientos(tareas,indice);

    }
    else{

        console.log(" -------- Todas las tareas  -------- ")

        for(let i : number = 0 ; i <tareas.length; i++){
            console.log(`[${i+1}]. ${tareas[i].titulo} (Estado: ${tareas[i].estado})`);
        }

        opcion = pedirNumero("Porfavor indique la tarea que desea ver: ", 1 , tareas.length,false);
        
        console.clear();

        VerTarea(tareas[opcion-1]);

        
        if(Confirmacion("Desea modificar los datos de la tarea?: ") == "y"){
            EditarTarea (tareas[opcion-1]);
        }
           
        else{
            console.log("Volviendo al menu...")
        }

    }
}

export function VerMisTareas(tareas:Tareas[]){
   
    let indice : number ;
   
    VerTipos();
    console.log();
    indice=pedirNumero("Porfavor elige una tipo: ",1, estado.length,false);

    VisualizarTipoTarea(tareas , indice)

    



}






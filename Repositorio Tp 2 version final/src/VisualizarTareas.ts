import PromptSync from "prompt-sync";
const prompt = PromptSync;

import type { Tareas } from "./Tarea";
import { dificultad, estado, VerTarea } from "./Tarea";
import { FormaDeVer } from "./interfas";
import { pedirNumero } from "./Controles";




function Titulo (tareas:Tareas[]) :Tareas[]{
let tareasOrdenadas : Tareas[] = [];
let ayudante : Tareas ;

//metodo que hace la copia del arreglo sin referenciarlo 

tareasOrdenadas = tareas.slice();

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

        tareas[j].titulo = tareas[j+1].titulo;

        tareas[j+1] = ayudante;

       }
    }

    return tareasOrdenadas;


}


return tareasOrdenadas;
}
function FechaCreacion(){

}

function fechaVencimiento(){

}

function Seleccion(tareas:Tareas[], indice:number, formaOrdenada:string): Tareas {

    console.log(`  --------  Tareas Ordenadas de forma ${formaOrdenada}  --------  `)
    console.log(`Estado: ${estado[indice]}/n`);

    for(let i : number = 0 ; i <tareas.length; i++){
        console.log(`[${i+1}]. ${tareas[i].titulo}`);
    }

    return tareas[pedirNumero("Porfavor seleccione una tarea para visualizar: ", 1 , tareas.length, false)-1];

}


function VisualizarTipoTarea(tareas:Tareas[], indice : number){
    console.clear();
    let ayudante:Tareas[]=[];
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

    switch(pedirNumero("Porfavor eliga una opcion",1,3,false)){
        case 1:




    }



    
}

}






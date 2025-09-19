import PromptSync from "prompt-sync";
const prompt = PromptSync();
import type { Tareas } from "./Tareas";
import { dificultad , Estado} from "./Tareas";
import { pedirNumero} from "./validaciones";

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
    console.log("\n\n\n");
    console.log("Desea ver los detalles de alguna?");
    console.log("Introduce el numero de la tarea o \"0\" para volver");
    let opcion : number = parseInt(prompt("Ingrese una opción: "));

    while (opcion != 0 && ( Number.isNaN(opcion) || opcion < 1 || opcion > tareas.length)){
        console.log ("La opcion que ha ingresado es incorrecta, Vuelvalo a intentar");
        opcion = parseInt(prompt("Ingrese una opción: "));
    }
    
    
    if(opcion === 0){
        console.clear();
        return;
    }

    

    tarea = tareas[opcion - 1]!;

    console.clear();

    console.log("============================================================")

    console.log("\n\n\nEsta es la tarea que elegiste:\n");
    console.log(`          Título: ${tarea!.titulo}\n\n`);
    console.log(`° Descripción: ${tarea!.descripcion}\n`);
    console.log(`° Estado: ${tarea!.estado}\n`);
    console.log(`° Dificultad: ${tarea!.dificultad}\n`);
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
    


function EditarTarea(tarea : Tareas){


    let entrada : string ;

    console.log("Si desea editar la tarea ingrese E, o presione 0 para volver al menu principal");
    
    let opcion : string = prompt("").trim();




    while ( opcion == "" ||(opcion.toLocaleLowerCase() != "e" && opcion != "0")){
        console.log("Porfavor ingrese una opcion valida");
        opcion = prompt("").trim();
    }

    if(opcion == "0"){
        console.clear();
        return;
    }

    console.clear();

    //descripcion 


    console.log("  ============= Tarea: "+tarea.titulo+ " ============= \n\n");
    console.log("-si desea mantener los valores de un atributo, simplemente aprete ( \"ENTER\" )");
    console.log("-Si desea borrar La descripcion ingrese ( \"0\" )\n");

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

    console.log("  ============= Tarea: "+tarea.titulo+ " ============= \n\n");
    console.log("-si desea mantener los valores de un atributo, simplemente aprete ( \"ENTER\" )");
    console.log("\n")

    for(let i : number = 0 ; i<Estado.length ; i++){
        console.log(`[${i+1}] ${Estado[i]}`);
    }
    console.log("\n")


    entrada = prompt("Ingrese el nuevo estado: ")?.trim()|| "";

    while(entrada != "" && (Number.isNaN(parseInt(entrada)) || Estado.length < parseInt(entrada) || parseInt(entrada)<=0)){

        console.log("Porfavor ingrese una opcion correcta");
        console.log("\n")

        for(let i : number = 0 ; i < Estado.length ; i++){
        console.log(`[${i+1}] ${Estado[i]}`);
        }
        console.log("\n")

        entrada= prompt("").trim() || "";

    }

    if(entrada.length>0){
        tarea.estado=Estado[parseInt(entrada)-1]!;
    }


    //dificultad

    console.clear();
    console.log("  ============= Tarea: "+tarea.titulo+ " ============= \n\n");
    console.log("-si desea mantener el valor simplemente aprete ( \"ENTER\" )");
    console.log("\n");

    for(let i : number = 0 ; i < dificultad.length ; i++){
        console.log(`[${i+1}] ${dificultad[i]}`);
    }

    console.log("");

    entrada = prompt("ingrese la nueva DIFICULTAD: ").trim() || "";
    
    while(entrada != "" && ((Number.isNaN(parseInt(entrada)) || dificultad.length < parseInt(entrada) || parseInt(entrada)<=0))){

        

        for(let i : number = 0 ; i < dificultad.length ; i++){
        console.log(`[${i+1}] ${dificultad[i]}`);
        }

        entrada = prompt("Porfavor ingrese una opcion correcta: ").trim() || "";

    }

    if(entrada.length>0){
        tarea.dificultad=dificultad[parseInt(entrada)-1]!;
    }

    console.clear();
    console.log("  ============= Tarea: "+tarea.titulo+ " ============= \n\n");
    console.log("ingresesando los datos de la fecha de vencimiento\n");

    let dia : number = pedirNumero("Porfavor ingrese el \" Dia \" de vencimiento ", 1 , 31);
    let mes : number = pedirNumero("Porfavor ingrese el \" MES \" de vencimiento ", 1 , 21);
    let anio : number= pedirNumero("Porfavor ingrese el \" AÑO \" de vencimiento ", 1900 ,2100 );

    tarea.fechavencimiento= new Date(anio, mes , dia);
    tarea.fechaultimaEdicion = new Date();

    console.clear();
    console.log("Tarea editada correctamente");
}

function VerPendientes(tareas:Tareas[]){
    console.clear();
    let ayudante:Tareas[]=[];

    let cont :number = 0 ;

    for(let i:number = 0; i<tareas.length;i++){
        if(tareas[i]!.estado == Estado[0]){
            cont++;
        }
    }




    if (cont === 0){
        console.clear();
        console.log("No tiene tareas \" Pendientes \"\n");
        return;
    }

    console.log("                    Tareas Pendientes\n\n")

    for(let i: number=0 ; i<tareas.length;i++){

    if(tareas[i].estado == Estado[0] ){
        ayudante.push(tareas[i]!);
            ayudante.push(tareas[i]);
            console.log(`[${i + 1}] ${tareas[i]!.titulo}`);
        }
    }

    VerDetalle(ayudante);
}

function VerEnCurso(tareas:Tareas[]){
    console.clear();
    let ayudante:Tareas[]=[];
    let cont :number = 0 ;

    for(let i:number = 0; i<tareas.length;i++){
        if(tareas[i]!.estado == Estado[1]){
            cont++;
        }
    }




    if (cont === 0){
        console.clear();
        console.log("No tiene tareas \" En curso \" \n");
        return;
    }

    console.log("                    Tareas En curso\n\n")

    console.log("mostrando tareas en curso:");
    for(let i:number = 0; i<tareas.length;i++){
        if(tareas[i]!.estado == Estado[1]){
            ayudante.push(tareas[i]);
            console.log(`[${i + 1}] ${tareas[i]!.titulo}`);
        }
    }
    VerDetalle(ayudante);
}

function VerTerminadas(tareas:Tareas[]){
    console.clear();
    let ayudante:Tareas[]=[];

    let cont :number = 0 ;

    for(let i:number = 0; i<tareas.length;i++){
        if(tareas[i]!.estado == Estado[2]){
            cont++;
        }
    }


    if (cont === 0){
        console.clear();
        console.log("No tiene tareas \" Terminadas \" \n");
        return;
    }

    console.log("                    Tareas Terminadas\n\n")

    console.log("mostrando tareas terminadas:");        
    for(let i:number=0; i<tareas.length;i++){
        if(tareas[i].estado == Estado[2]){
            ayudante.push(tareas[i]);
            console.log(`[${i + 1}] ${tareas[i]!.titulo}`);
        }
    }
    

    VerDetalle(ayudante);
}

function VerTarea(tareas:Tareas[]) {
    console.log("Que tarea deseas ver?\n");
    console.log("[1] Ver todas las tareas");
    console.log("[2] Ver tareas pendientes");
    console.log("[3] Ver tareas en curso");
    console.log("[4] Ver tareas terminadas");
    console.log("[0] Volver al menú principal\n");
    let opcion:number = parseInt(prompt("Ingrese una opción: "));

    while(Number.isNaN(opcion) || opcion<0 || opcion>4){
        console.log("Opcion no valida");
        opcion = parseInt(prompt("Ingrese una opción: "));
    }

    if(opcion == 0){
        console.log("Saliendo al menu")
        return;
    }

    
    
    switch(opcion){
        case 1:
            mostrarTodasTareas(tareas);
        break;
        
        case 2:
            VerPendientes(tareas);
        break;
        
        case 3:
            VerEnCurso(tareas);
        break;
        
        case 4:

            VerTerminadas(tareas);
        break;

        case 0:
            console.log("Volviendo al menú principal...");
            break;
        }
    
}

export{VerTarea , EditarTarea}
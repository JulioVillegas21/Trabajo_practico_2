import  promptSync from "prompt-sync";   
const prompt = promptSync();
import {SiNo} from "./validaciones";
import { pedirNumero } from "./validaciones";


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
        estado: Estado[0],
        fechaCreacion: new Date(),
        fechaultimaEdicion: new Date(),
        fechavencimiento: null,
        dificultad: dificultad[0],
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

    for (let i : number = 0; i<tareas.length ; i++){
        if (input == tareas[i].titulo){
            console.clear();
            console.log("Ya se encuentra una tarea con ese mismo titulo, porfavor introduzca uno nuevo")
            verificador=true;
        }
    }

    }while(verificador);



    console.clear();
    nuevaTarea.titulo = input;
    let descripcionInput: string = "";



    //Descripcion 
    // Validacion descripcion de la tarea (500 caracteres maximo)
    do{
        verificador = false;
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

    console.clear();
    nuevaTarea.descripcion = descripcionInput;

    console.log("Ingrese el nuevo estado de la tarea O presione \" ENTER \" para dejarlo como predeterminado (pendiente)\n")

    for(let i : number = 0 ; i<Estado.length ; i++){
        console.log(`[${i+1}] ${Estado[i]}`);
    }
    
    console.log("\n")

    //Estado
    
    
    input = prompt("Ingrese el nuevo estado: ")?.trim()|| "";
    
    while(input != "" && (Number.isNaN(parseInt(input)) || Estado.length < parseInt(input)) || parseInt(input)<=0){
        console.clear();
        console.log("Recuerde que presionar \" ENTER \" dejara como predeterminado (pendiente)\n");
        for(let i : number = 0 ; i < Estado.length ; i++){
        console.log(`[${i+1}] ${Estado[i]}`);
        }
        console.log("\n")
    
        input = prompt("Porfavor ingrese una opcion correcta: ").trim() || "";
    
    }

    if(input.length>0){
        nuevaTarea.estado=Estado[parseInt(input)-1]!;
    }

    console.clear();



    //Dificultad





    console.log("Presione \" ENTER \" para dejarlo como predeterminado (Facil)\n"); 

    for(let i : number = 0 ; i < dificultad.length ; i++){
        console.log(`[${i+1}] ${dificultad[i]}`);
    }
    
    console.log("");
    
    input = prompt("Ingrese la dificultad: ").trim() || "";
        
    while(input != "" && ((Number.isNaN(parseInt(input)) || dificultad.length < parseInt(input) || parseInt(input)<=0))){
        console.clear();
        console.log("Recuerde que presionar \" ENTER \" dejara como predeterminado (Facil)\n");
        for(let i : number = 0 ; i < dificultad.length ; i++){
        console.log(`[${i+1}] ${dificultad[i]}`);
        }
        console.log("");
        input = prompt("Porfavor ingrese una opcion correcta: ").trim() || "";
    
    }
    
    if(input.length>0){
        nuevaTarea.dificultad=dificultad[parseInt(input)-1]!;
    }

    console.clear();
    //Fecha de vencimiento 

    console.log("ingrese la fecha de vencimiento");

    let dia : number = pedirNumero("Porfavor ingrese el \" Dia \" de vencimiento ", 1 , 31);
    console.clear();
    let mes : number = pedirNumero("Porfavor ingrese el \" MES \" de vencimiento ", 1 , 21);
    console.clear();
    let anio : number= pedirNumero("Porfavor ingrese el \" AÑO \" de vencimiento ", 1900 ,2100 );

    nuevaTarea.fechavencimiento= new Date(anio, mes , dia , );

    console.clear();
    return nuevaTarea;
}


export {crearTarea , dificultad , Estado};
export type {Tareas};


export interface Tareas{
    titulo: string , 
    descripcion: string ,
    estado: string ,
    dificultad: string ,
    fechaCreacion: Date ,
    fechavencimiento: Date | null ,
    fechaultimaEdicion: Date ,
};


export function VerTarea(tarea:Tareas){

    console.log("----------- Tarea seleccionada -----------\n");

    console.log(`Titulo : ${tarea.titulo}\n`);

    console.log(`Descripcion : ${tarea.descripcion}\n`);

    console.log(`Estado : ${tarea.estado}\n`);

    console.log(`Dificultad ${tarea.dificultad}\n`);

    console.log(`fecha de creacion : ${tarea.fechaCreacion}\n`);
    
    if (tarea.fechavencimiento== null){
        console.log(`Fecha de vencimiento : ${tarea.fechavencimiento}\n`);
    }
    else{
        console.log("Esta tarea se encuentra sin fecha de vencimiento\n");
    }

    console.log(`fecha de ultima edicion : ${tarea.fechavencimiento}\n`);

}








export const dificultad : string[] = ["Facil 🌕🌑🌑", "Medio 🌕🌕🌑", "Dificil 🌕🌕🌕"];
export const estado : string[] = ["Pendiente" , "En curso", "Terminada" , "Cancelada"];
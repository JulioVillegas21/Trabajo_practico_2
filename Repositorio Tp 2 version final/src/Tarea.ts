
export interface Tareas{
    titulo: string , 
    descripcion: string ,
    estado: string ,
    fechaCreacion: Date ,
    fechavencimiento: Date | null ,
    dificultad: string ,
    fechaultimaEdicion: Date ,
};

export const dificultad : string[] = ["Facil 🌕🌑🌑", "Medio 🌕🌕🌑", "Dificil 🌕🌕🌕"];
export const estado : string[] = ["Pendiente" , "En curso", "Terminada" , "Cancelada"];
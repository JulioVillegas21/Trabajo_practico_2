function Menuprincipal() {
    console.clear();
  console.log("╔════════════════════════════════════════════╗");
  console.log("║              MENÚ PRINCIPAL               ║");
  console.log("╠════════════════════════════════════════════╣");
  console.log("║ [1] Ver Mis Tareas                        ║");
  console.log("║ [2] Buscar una Tarea                      ║");
  console.log("║ [3] Agregar una Tarea                     ║");
  console.log("║ [0] Salir                                 ║");
  console.log("╚════════════════════════════════════════════╝");
    return;
}


function VerTareas(){
    console.log("Que tarea deseas ver?");
    console.log("[1] Ver todas las tareas");
    console.log("[2] Ver tareas pendientes");
    console.log("[3] Ver tareas en curso");
    console.log("[4] Ver tareas terminadas");
    console.log("[0] Volver al menú principal");

}



export{Menuprincipal as menu, VerTareas }
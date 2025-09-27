function Menuprincipal() {
  
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


function VerTipos(){
    console.log(" -------- Que tipos de tareas desea ver? -------- \n");
    
    console.log("[1] Ver tareas pendientes");
    console.log("[2] Ver tareas en curso");
    console.log("[3] Ver tareas terminadas");
    console.log("[4] Ver todas las tareas");
    console.log("[0] Volver al menú principal");

}

function FormaDeVer(){

  console.log(" -------- Como desea visualizar las tareas ? -------- \n");
  console.log("[1] Alfabetico ascendente");
  console.log("[2] fecha de vencimiento ascendente");
  console.log("[3] fecha de creacion ascendente");

}








export{Menuprincipal as menu, VerTipos , FormaDeVer}
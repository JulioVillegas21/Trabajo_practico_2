"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
const Interfas_1 = require("./Interfas");
const CrearTarea_1 = require("./CrearTarea");
const VisualizarTareas_1 = require("./VisualizarTareas");
const BuscarTarea_1 = require("./BuscarTarea");
function main() {
    let opcion = 0;
    let tareas = [];
    // al tener "strictNullChecks": true necesito si o si iniciar tarea para usarla, el poner | me permite dejarla en null temporalmente
    let tarea = null;
    do {
        (0, Interfas_1.menu)();
        opcion = parseInt(prompt("Ingrese una opcion: "));
        // control para las opciones 
        if (opcion > 3 || opcion < 0) {
            console.clear();
            console.log("la opcion es incorrecta, porfavor vuelva a intentarlo");
            continue;
        }
        switch (opcion) {
            // Caso de "VER MIS TAREAS "
            case 1:
                console.clear();
                if (tareas.length === 0) {
                    console.log("No hay tareas creadas");
                    break;
                }
                (0, VisualizarTareas_1.VerMisTareas)(tareas);
                break;
            // Caso de "BUSCAR UNA TAREA"
            case 2:
                if (tareas.length === 0) {
                    console.log("No hay tareas creadas");
                    break;
                }
                (0, BuscarTarea_1.BuscarTarea)(tareas);
                break;
            //Caso de "AGREGAR TAREAS"
            case 3:
                console.clear();
                tareas.push((0, CrearTarea_1.CrearTarea)(tareas));
                console.clear();
                console.log("Tarea creada correctamente");
                break;
            case 0:
                console.log("Saliendo....");
                break;
        }
    } while (opcion != 0);
}
main();

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VerMisTareas = VerMisTareas;
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = prompt_sync_1.default;
const Tarea_1 = require("./Tarea");
const Interfas_1 = require("./Interfas");
const Controles_1 = require("./Controles");
//  Meto de ordenamiento de tareas por titulo 
function Titulo(tareas) {
    let tareasOrdenadas = [];
    let ayudante;
    //metodo de resolucion : Ordenamiento burbuja 
    for (let i = 0; i < tareas.length - 1; i++) {
        for (let j = 0; j < tareas.length - 1; j++) {
            /*funcion que busque con la ia
            devuelve -1 si el titulo 1 es menor al titulo 2 , 0 si son iguales y 1 si es titulo 2> titulo 1
            parametro "es" = hay letras que en ingles van antes que en español
            sensitivity = base lo ponemos para no prestar atencion a las mayusculas y tildes
            ignorePunctuation: true  ignora los guiones y etc */
            if (tareas[j].titulo.localeCompare(tareas[j + 1].titulo, `es`, { sensitivity: 'base', ignorePunctuation: true }) == 1) {
                // ojo que estoy intercambiando direcciones
                ayudante = tareas[j];
                tareas[j].titulo = tareas[j + 1].titulo;
                tareas[j + 1] = ayudante;
            }
        }
        return tareas;
    }
    return tareasOrdenadas;
}
function FechaCreacion() {
}
function fechaVencimiento() {
}
function Seleccion(tareas, indice, formaOrdenada) {
    console.log(`  --------  Tareas Ordenadas de forma ${formaOrdenada}  --------  `);
    console.log(`Estado: ${Tarea_1.estado[indice]}/n`);
    for (let i = 0; i < tareas.length; i++) {
        console.log(`[${i + 1}]. ${tareas[i].titulo}`);
    }
    return tareas[(0, Controles_1.pedirNumero)("Porfavor seleccione una tarea para visualizar: ", 1, tareas.length, false) - 1];
}
function VisualizarTipoTarea(tareas, indice) {
    console.clear();
    let tarea;
    let validacion = false;
    if (indice < Tarea_1.estado.length + 1) {
        //Verifica si tiene tareas del tipo que eligio
        for (let i = 0; i < tareas.length; i++) {
            if (tareas[i].estado == Tarea_1.estado[indice - 1]) {
                validacion = true;
            }
        }
        if (!validacion) {
            console.clear();
            console.log(`No tiene tareas del tipo ${Tarea_1.estado[indice - 1]}`);
            return;
        }
        (0, Interfas_1.FormaDeVer)();
        //switch que tiene la funcion en donde la funcion retorna la funcion
        switch ((0, Controles_1.pedirNumero)("Porfavor eliga una opcion", 1, 3, false)) {
            case 1:
                //ojo que hay una funcion que recibe otra funcion
                tarea = Seleccion(Titulo(tareas), indice - 1, "Alfabetico ascendente");
                (0, Tarea_1.VerTarea)(tarea);
                if ((0, Controles_1.Confirmacion)("Desea modificar los datos de la tarea?") == "y") {
                    (0, Tarea_1.EditarTarea)(tarea);
                }
                else {
                    console.log("Volviendo al menu...");
                    break;
                }
                break;
            case 2:
                break;
        }
    }
}
function VerMisTareas(tareas) {
    let indice;
    (0, Interfas_1.VerTipos)();
    indice = (0, Controles_1.pedirNumero)("Porfavor elige una tipo: ", 1, Tarea_1.estado.length, false);
    VisualizarTipoTarea(tareas, indice);
}

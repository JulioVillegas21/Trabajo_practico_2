"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BuscarTarea = BuscarTarea;
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
const Tarea_1 = require("./Tarea");
function BuscarTarea(tareas) {
    var _a;
    let encontrada = false;
    console.clear();
    console.log("Indique el titulo de la tarea a buscar");
    let titulo = ((_a = prompt("titulo: ")) === null || _a === void 0 ? void 0 : _a.trim()) || "";
    for (let i = 0; i < tareas.length; i++) {
        if (tareas[i].titulo === titulo) {
            console.log("tarea encontrada");
            const tarea = tareas[i];
            console.log(`[${i + 1}] ${tarea.titulo}`);
            encontrada = true;
            (0, Tarea_1.VerTarea)(tarea);
        }
        if (!encontrada) {
            console.log("Tarea no encontrada, Volviendo al menu ...");
            return;
        }
    }
}

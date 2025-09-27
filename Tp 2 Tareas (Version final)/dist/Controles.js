"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Confirmacion = Confirmacion;
exports.pedirNumero = pedirNumero;
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
function Confirmacion(mensaje) {
    var _a, _b;
    let input = "";
    console.log(`${mensaje}.\n[y]-Si [N]-No.`);
    input = ((_a = prompt("Ingrese su opcion: ")) === null || _a === void 0 ? void 0 : _a.trim()) || "";
    while (input.toLowerCase() !== "y" && input.toLowerCase() !== "n") {
        console.log("Opcion invalida, ingrese una opcion valida.\n[y]-Si [N]-No.");
        input = ((_b = prompt("Ingrese su opcion: ")) === null || _b === void 0 ? void 0 : _b.trim()) || "";
    }
    return input.toLowerCase();
}
function pedirNumero(mensaje, min, max, activadorVacio) {
    var _a, _b;
    let entrada = ((_a = prompt(`${mensaje}`)) === null || _a === void 0 ? void 0 : _a.trim()) || "";
    if (entrada === "" && activadorVacio) {
        return min;
    }
    while (Number.isNaN(parseInt(entrada)) || parseInt(entrada) > max || parseInt(entrada) < min) {
        console.clear();
        if (entrada === "" && activadorVacio) {
            return min;
        }
        console.log(`Por favor ingrese un número válido entre ${min} y ${max}`);
        entrada = ((_b = prompt(`${mensaje}`)) === null || _b === void 0 ? void 0 : _b.trim()) || "";
    }
    return parseInt(entrada);
}

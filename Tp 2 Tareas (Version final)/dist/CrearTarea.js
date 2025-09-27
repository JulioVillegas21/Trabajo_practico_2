"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CrearTarea = CrearTarea;
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
const Tarea_1 = require("./Tarea");
const Controles_1 = require("./Controles");
/*pongo como parametro opcional el nuevaTarea ya que es opcional segun si se utiliza para editar
Culpa de ello en cada asginacion afirmo que el objeto tiene algo y no se trata de algo nulo
Eso lo hago con " ! " con cada asignacion*/
function CrearTarea(tareas) {
    /* la variable validacion sera utilizada en "do" de cada elemento a cargar en la tarea
    Titulo
    Descripcion
    */
    var _a, _b;
    let validacion = true;
    /* Incializo la tarea para poder ya tener los datos de default */
    let nuevaTarea = {
        titulo: "Default",
        descripcion: "Default",
        estado: Tarea_1.estado[0],
        fechaCreacion: new Date(),
        fechaultimaEdicion: new Date(),
        fechavencimiento: null,
        dificultad: Tarea_1.dificultad[0],
    };
    //Variable la cual utilizo para guardar los datos de entrada 
    let input = "";
    // Validacion titulo de la tarea (100 caracteres maximo)
    do {
        validacion = false;
        input = ((_a = prompt("Ingrese el título de la tarea (max 100 caracteres): ")) === null || _a === void 0 ? void 0 : _a.trim()) || ""; // trim sirve para eliminar espacios blancos al pricipio y al final
        if (input.length === 0) {
            console.clear();
            console.log("El titulo no puede estar vacio, por favor ingrese un titulo valido.");
            validacion = true;
            continue;
        }
        if (input.length > 100) {
            //Confirmacion se utilizara simplemente para poner si quiere acortar el titulo o no quiere acortar el titulo  
            if ((0, Controles_1.Confirmacion)("El Titulo supero los 100 caracteres, desea recortarlo ?").toLocaleLowerCase() === "y") {
                nuevaTarea.titulo = input.slice(0, 100);
            }
            else {
                console.clear();
                validacion = true;
                continue;
            }
        }
        for (let i = 0; i < tareas.length; i++) {
            if (input.toLowerCase() == tareas[i].titulo.toLowerCase()) {
                console.clear();
                console.log("Ya se encuentra una tarea con ese mismo titulo, porfavor introduzca uno nuevo");
                validacion = true;
            }
        }
    } while (validacion);
    nuevaTarea.titulo = input;
    console.clear();
    let descripcionInput = "";
    //Descripcion 
    // Validacion descripcion de la tarea (500 caracteres maximo)
    do {
        validacion = false;
        descripcionInput = ((_b = prompt("Ingrese la descripcion de la tarea (max 500 caracteres): ")) === null || _b === void 0 ? void 0 : _b.trim()) || ""; // elimino los caracters vacios
        if (descripcionInput.length === 0) {
            if ((0, Controles_1.Confirmacion)("Esta dejando la descripcion vacia, desea hacerlo ? ").toLowerCase() === "y") {
                validacion = false;
            }
            else {
                validacion = true;
            }
        }
        if (descripcionInput.length > 500) {
            if ((0, Controles_1.Confirmacion)("la descripcion supero los 500 caracteres, desea recortarla ?").toLowerCase() === "y") {
                descripcionInput = descripcionInput.slice(0, 500);
                validacion = false;
            }
            else {
                validacion = true;
            }
        }
    } while (validacion);
    console.clear();
    nuevaTarea.descripcion = descripcionInput;
    //Estado
    console.log("Ingrese el estado de la tarea");
    for (let i = 0; i < Tarea_1.estado.length; i++) {
        console.log(`[${i + 1}] ${Tarea_1.estado[i]}`);
    }
    /* la funcion de "pedir numero" sirve para pedir un numero del rango que tengo en el arreglo
    los parametros esta automatizados para poder agregar estados sin necesidad de cambiar todo el codigo
    el primer parametro es un mensaje, segundo es el valor minimo que puede agarrar el usuario, tercero es la longitud del arreglo
    y el cuarto es el parametro que permite dejar valores pode default (Siempre sera el primer valor del arreglo*/
    /*pedir numero se llama asi porque originalmente nacio para la fecha pero muto para otras cosas mas jajajaj
    Gracias a eso podemos utilizarla en mas lugares del codigo*/
    nuevaTarea.estado = Tarea_1.estado[(0, Controles_1.pedirNumero)("Porfavor ingrese una de las opcines, Precionar ENTER dejara la tarea con el estado en default (Pendiente)", 1, Tarea_1.estado.length, true) - 1];
    console.clear();
    //Dificultad
    //utilizara la misma logica que se uso en estado 
    console.log("Ingrese la dificultad de la tarea");
    for (let i = 0; i < Tarea_1.dificultad.length; i++) {
        console.log(`[${i + 1}] ${Tarea_1.dificultad[i]}`);
    }
    nuevaTarea.dificultad = Tarea_1.dificultad[(0, Controles_1.pedirNumero)("Porfavor ingrese una de las opcines, Precionar ENTER dejara la tarea con la dificultad en default (facil)", 1, Tarea_1.dificultad.length, true) - 1];
    console.clear();
    if ((0, Controles_1.Confirmacion)("Desea agregar fecha de vencimiento ?") === "y") {
        console.log("ingrese la fecha de vencimiento");
        let dia = (0, Controles_1.pedirNumero)("Porfavor ingrese el \" DIA \" de vencimiento ", 1, 31, false);
        let mes = (0, Controles_1.pedirNumero)("Porfavor ingrese el \" MES \" de vencimiento ", 1, 12, false);
        let año = (0, Controles_1.pedirNumero)("Porfavor ingrese el \" AÑO \" de vencimiento ", 1900, 2100, false);
        nuevaTarea.fechavencimiento = new Date(año, mes, dia);
    }
    else {
        console.log("Podra agregar un vencimiento en editar tarea si es que lo desea.");
    }
    return nuevaTarea;
}

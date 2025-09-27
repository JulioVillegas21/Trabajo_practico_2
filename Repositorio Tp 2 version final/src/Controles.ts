import PromptSync from "prompt-sync";
const prompt = PromptSync();


export function Confirmacion(mensaje : string ) : string {

    let input : string = "";

    console.log(`${mensaje}.\n[y]-Si [N]-No.`);

    input = prompt("Ingrese su opcion: ")?.trim() || "";

    while(input.toLowerCase() !== "y" && input.toLowerCase() !== "n"){
            console.log("Opcion invalida, ingrese una opcion valida.\n[y]-Si [N]-No.");
            input = prompt("Ingrese su opcion: ")?.trim() || "";
        }   
    return input;
}

export function pedirNumero(mensaje: string, min: number, max: number , activadorVacio : boolean): number {

    let entrada : string = prompt(`${mensaje}`)?.trim()|| "";

    if ( entrada === "" && activadorVacio){
        return min;
    }

    while(Number.isNaN(parseInt(entrada)) || parseInt(entrada) >max || parseInt (entrada)<min ){
        console.clear();

        if ( entrada === "" && activadorVacio){
        return min;
        }
        
        console.log(`Por favor ingrese un número válido entre ${min} y ${max}`);
        entrada = prompt(`${mensaje}`)!?.trim()|| "";
    }
    return parseInt(entrada);
}


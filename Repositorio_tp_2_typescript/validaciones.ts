import PromptSync from "prompt-sync";
const prompt = PromptSync();




function SiNo(input: string) : string {
    while(input.toLowerCase() !== "y" && input.toLowerCase() !== "n"){
            console.log("Opcion invalida, ingrese una opcion valida.\n[y]-No [N]-No.");
            input = prompt("Ingrese su opcion: ")?.trim() || "";
        }   
    return input;
}

function pedirNumero(mensaje: string, min: number, max: number): number {
    console.log("\n")

    let entrada : string = prompt(`${mensaje}`)?.trim()|| "";

    while(Number.isNaN(parseInt(entrada)) || parseInt(entrada) >max || parseInt (entrada)<min ){
        console.clear();

        console.log(`Por favor ingrese un número válido entre ${min} y ${max}`);
        console.log("\n")
        entrada = prompt(`${mensaje}`)!?.trim()|| "";
    }
    return parseInt(entrada);
}

export {SiNo , pedirNumero}
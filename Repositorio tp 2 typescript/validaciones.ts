
function SiNo(input: string) : string {
    while(input.toLowerCase() !== "y" && input.toLowerCase() !== "n"){
            console.log("Opcion invalida, ingrese una opcion valida.\n[y]-No [N]-No.");
            input = prompt("Ingrese su opcion: ")?.trim() || "";
        }   
    return input;
}






export {SiNo}
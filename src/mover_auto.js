function mover_auto(cadena){
    if (cadena === "" || cadena === " "){
        return "Cadena vacia";
    }
    let matriz = cadena.split(",")
    return toString(matriz);
}

export default mover_auto;
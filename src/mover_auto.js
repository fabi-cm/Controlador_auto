function mover_auto(comandos){
    let datos = comandos.split("/")
    let matriz;
    let posicion;
    let direccion;
    let movimentos;
    
    if (comandos === "" || comandos === " "){
        return "Cadena vacia";
    }
    else if (datos.length < 2){
        return `${matriz}`;
    }
    else if (datos.length < 3){
        matriz = extraer_matriz(datos[0])
        posicion = extraer_posicion(datos[1])
        direccion = extraer_direccion(datos[1])
        return `${matriz},${posicion} ${direccion}`;
    }
    
    matriz = extraer_matriz(datos[0])
    posicion = extraer_posicion(datos[1])
    direccion = extraer_direccion(datos[1])
    movimentos = datos[2]
    
    return `${matriz},${posicion} ${direccion}, ${movimentos}`;
}

function extraer_matriz(datos){
    let matriz = datos.split(",").map(Number)
    return matriz
}
function extraer_posicion(datos){
    let posicion = datos.split(",");
    return posicion
}

function extraer_direccion(datos){
    let direccion = datos;
    return direccion
}

export default mover_auto;

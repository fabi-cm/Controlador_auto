function mover_auto(comandos){
    let datos = comandos.split("/")
    let matriz;
    let posicion;
    let direccion;
    let movimentos;
    
    const orientaciones = {
        N: [0, 1],
        S: [0, -1], 
        E: [1, 0], 
        O: [-1, 0],
    }

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
    
    let [x, y] = posicion;
    let [dx, dy] = orientaciones[direccion];
    for (const instruccion of movimentos) {
      if (instruccion === "I") {
        [dx, dy] = [-dy, dx];
      } else if (instruccion === "D") {
        [dx, dy] = [dy, -dx];
      } else if (instruccion === "A") {
        const x2 = x + dx;
        const y2 = y + dy;
        if (0 <= x2 && x2 <= matriz[0] && 0 <= y2 && y2 <= matriz[1]) {
          x = x2;
          y = y2;
        }
      }
    }
    
    return`${x},${y} ${direccion}`;
    //return `${matriz},${posicion} ${direccion}, ${movimentos}`;
}

function extraer_matriz(datos){
    let matriz = datos.split(",").map(Number)
    return matriz
}
function extraer_posicion(datos){
    let datos_posicion = datos.split(",");
    let quitar_direccion = datos_posicion[1].split("")
    let posicion = [ datos_posicion[0] , quitar_direccion[0]].map(Number)
    return posicion
}

function extraer_direccion(datos){
    let limpiar_datos = datos.split("");
    let direccion = limpiar_datos[limpiar_datos.length - 1]
    return direccion
}

export default mover_auto;

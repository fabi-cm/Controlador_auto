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

    if (validar_matriz(matriz) === false){
      return 'Matriz invalida'
    }
    // if (validar_posicion(matriz,posicion) === false){
    //   return 'Posicion invalida'
    // }
    // if(validar_direccion(direccion) === false){
    //   return 'Direccion invalida'
    // }
    // if(validar_movimiento(movimentos === false)){
    //   return 'Movimientos invalidas'
    // }

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
        else if(instruccion === "J"){
        const saltoX = x + x + dx;
        const saltoY = y + y + dx;
        if(0 <= saltoX && saltoX <= matriz[0] && 0 <= saltoY && saltoY <= matriz[1]){
           x = saltoX;
           y = saltoY;
        }
      }
    }
    const posicion_final = `${x},${y} ${direccion}`
    return mostrar_datos(matriz,posicion,direccion,movimentos,posicion_final);
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


function mostrar_datos(matriz,posicion,direccion,movimentos,posicion_final){
  return `Posicion inicial: ${posicion} ${direccion} <br />
  Comandos: <br /> 
    ${matriz} <br />
    ${posicion} ${direccion} <br />
    ${movimentos} <br />
Posicion final: ${posicion_final}`
}

function validar_matriz(matriz){
  let validacion = true
  if (matriz[0] <= 0 && matriz[1] <= 0){
    validacion = false;
  }
  return validacion;
}

function matriz_circular(matriz){
  
}

// function validar_posicion(matriz, posicion){
//   let validacion = true
//   if (posicion[0] > matriz[0] || posicion[1] > matriz[1]){
//     validacion = false;
//   }
//   return validacion;
// }

// function validar_direccion(direccion){
//   let validacion = true
//   if (direccion !== 'N' || direccion !== 'S' || direccion !== 'O' || direccion !== 'E'){
//     validacion = false;
//   }
//   return validacion;
// }

// function validar_movimiento(movimentos){
//   let validacion = true;
//   for (const instruccion of movimentos) {
//     if (instruccion !== "I" || instruccion !== "D" || instruccion !== "A") {
//       return false;
//     }
//   }
//   return validacion;
// }

export default mover_auto;

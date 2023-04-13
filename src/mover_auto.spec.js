import mover_auto from "./mover_auto";

describe("Mover un auto", () => {
  it("Al tener una cadena vacia, Retorna -> cadena vacia", () => {
    expect(mover_auto("").toString("Cadena vacia"));
  });
  it('El pibe puede ingresar las dimensiones del área de juego en formato "X, Y": "5,5" -> [5,5]', () => {
    expect(mover_auto("5,5").toString("{5,5}"));
  });

  it('El pibe puede ingresar la posición inicial del auto en formato "matriz/X, Y, D", donde "D" es la orientación', () => {
    expect(mover_auto("5,5/1,2N").toString("{5,5}, {1,2 N}"));
  });
  it('El pibe puede ingresar los comandos para el auto como una cadena de caracteres que consiste en las letras "I" (Izquierda), "D" (Derecha) y "A" (Avanzar)', () => {
    expect(mover_auto("5,5/1,2N/IAIAIAIAA").toString("{5,5}, {1,2 N}, {IAIAIAIAA}"));
  });
  it('La aplicación debe devolver la posición final del auto después de ejecutar los comandos', () => {
    expect(mover_auto("5,5/1,2N/IAIAIAIAA").toString("1,3 N"));
  });

  it('La aplicación debe devolver la posición final del auto después de ejecutar los comandos', () => {
    expect(mover_auto("5,5/3,3E/AADAADADDA").toString("5,1 E"));
  });
  
  it("La aplicación debe validar que la dimensión del área de juego sea mayor a cero en ambas dimensiones.", () => {
    expect(mover_auto("0,0/1,3E/AIAIA").toString("Matriz invalida"));
  });

  it('La aplicación debe validar que la posición inicial del auto se encuentre dentro del área de juego.', () => {
    expect(mover_auto("5,5/6,-3N/AIAIA").toString("Posicion invalida"));
  });
  
  xit('Validacion de la direccion no debe ser diferente de N, E, O, S', () => {
    expect(mover_auto("5,5/1,3K/AIAIA").toString("Direccion invalida"));
  });

  xit('Validacion de los movimienos no debe ser diferente de I, D, A', () => {
    expect(mover_auto("5,5/1,3K/AIAIA").toString("Movimientos invalidas"));
  });

  it('La aplicación debe devolver la posición final del auto después de ejecutar los comandos', () => {
    expect(mover_auto("4,4/1,1E/AAIIAA").toString("1,1 E"));
  });

  it('La aplicación debe devolver la posición final del auto después de ejecutar los comandos', () => {
    expect(mover_auto("5,5/2,2N/ADAAD").toString("4,3 N"));
  });

  // Examen 2

  it('Implementar un nuevo comando de movimiento J (JUMP), avansa 2 posiciones a la vez', () => {
    expect(mover_auto("5,5/1,2N/IAIAIAIJ").toString("1,3 N"));
  });

  it('Cuando el auto llega a alguno de los límites de la matriz (tanto en x como en y), ahora podrá seguir avanzando continuando desde el inicio', () => {
    expect(mover_auto("5,5/1,2N/AAAA").toString("1,0 N"));
  });
  it('Prueba de límites de la matriz (tanto en x como en y), de manera horizontal', () => {
    expect(mover_auto("5,5/2,2E/AAAA").toString("0,2 E"));
  });
  it('Prueba de límites de la matriz con JUMP en y', () => {
    expect(mover_auto("5,5/2,2N/AAAAJ").toString("2,2 N"));
  });
});
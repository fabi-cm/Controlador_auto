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
  xit('El pibe puede ingresar los comandos para el auto como una cadena de caracteres que consiste en las letras "I" (Izquierda), "D" (Derecha) y "A" (Avanzar)', () => {
    expect(mover_auto("1,3").toString("[1,3]"));
  });
  xit('La aplicación debe devolver la posición final del auto después de ejecutar los comandos en formato "X, Y, D"', () => {
    expect(mover_auto("1,3").toString("[1,3]"));
  });
  xit("La aplicación debe validar que la dimensión del área de juego sea mayor a cero en ambas dimensiones.", () => {
    expect(mover_auto("1,3").toString("[1,3]"));
  });
  xit("La aplicación debe validar que la posición inicial del auto se encuentre dentro del área de juego.", () => {
    expect(mover_auto("1,3").toString("[1,3]"));
  });
  xit('La aplicación debe validar que los comandos ingresados para cada auto solo contengan las letras "I", "D" y "A"', () => {
    expect(mover_auto("1,3").toString("[1,3]"));
  });
  xit("Si se ingresa un comando inválido, la aplicación debe mostrar un mensaje de error indicando el problema", () => {
    expect(mover_auto("1,3").toString("[1,3]"));
  });
  xit("La posición inicial y final del auto deben ser claramente visibles en la interfaz gráfica", () => {
    expect(mover_auto("1,3").toString("[1,3]"));
  });
});

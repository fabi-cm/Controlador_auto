import mover_auto from "./mover_auto"

describe('Mover un auto', () => {
    it('Al tener una cadena vacia, Retorna -> cadena vacia', () =>{
        expect(mover_auto("").toString("Cadena vacia"))
    })
    it('El conductor puede ingresar las dimensiones del área de juego en formato "X, Y": "1,3" -> [1,3]', () => {
        expect(mover_auto("1,3").toString("[1,3]"))
    })
})
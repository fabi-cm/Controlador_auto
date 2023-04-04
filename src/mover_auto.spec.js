import mover_auto from "./mover_auto"

describe('Mover un auto', () => {
    it('Al tener una cadena vacia, Retorna -> cadena vacia', () =>{
        expect(mover_auto("").toString("Cadena vacia"))
    })
})